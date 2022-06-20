export class AnimationHelper
{
	private static text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.`.repeat(10);
	
	private static title = Array.from("Mathias Amandus Andvik Løken");
	
	public static animateHomePageText(update: (text: string) => void, initialDelay: number, index: number = 1)
	{
		
		const delay = index === 1 ? initialDelay : (
				this.text.charAt(index) === "." ? 800 : 100 * Math.random());
		
		window.setTimeout(() =>
		{
			update(this.text.substring(0, index));
			if (index < this.text.length)
			{
				this.animateHomePageText(update, initialDelay, ++index);
			}
		}, delay);
	}
	
	public static animateHomePageTitle(update: (text: string[]) => void, initialDelay: number, index: number = 1)
	{
		const delay = index === 1 ? initialDelay : (
				this.title[index] === " " ? 10 : 80);
		
		window.setTimeout(() =>
		{
			update(this.title.slice(0, index));
			if (index < this.title.length)
			{
				this.animateHomePageTitle(update, initialDelay, ++index);
			}
		}, delay);
	}
}
