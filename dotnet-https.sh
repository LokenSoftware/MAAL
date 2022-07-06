# params
name=$1

if [ -z "$name" ]; then
	echo "Project name and configuration are required params"
	exit 0
fi

# Prefer appdata dir
baseFolder=""
if [ -z "$APPDATA" ]; then
	baseFolder="$HOME/.aspnet/https"
else
	baseFolder="$APPDATA/ASP.NET/https"
fi

certPath="$baseFolder/$name.pem"
keyPath="$baseFolder/$name.key"

# Generate cert if not exist
if [ ! -f "$certPath" ]; then
	dotnet dev-certs https --export-path "$certPath" --format Pem --no-password || exit 0
fi

# Run Nuxt
echo "--ssl-cert $certPath --ssl-key $keyPath"
