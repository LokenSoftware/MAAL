import { useState } from "#app";

export default function()
{
	return useState("foo", () => "bar");
}
