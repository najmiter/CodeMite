enum Color : byte // can be any integral type
{
    RED = 10,
    GREEN = 13,
    BLUE = 255,
}

class CodeMite
{
    static void Main(string[] _)
    {
        // int color = 13;
        // int red = 10;

        // if (color == red) 
        // {

        // }

        Color color = Color.RED;
        // var color2 = Color.BLUE;

        // color = color2;

        // Color.BLUE = Color.GREEN; // NOT ALLOWED

        color = Color.GREEN;

        // if (color == Color.GREEN)
        // {
        //     Console.WriteLine($"The color is GREEN");
        // }
        // else
        // {
        //     Console.WriteLine($"The color is {color}");
        // }

        // Console.WriteLine((int)color);
        // Console.WriteLine((int)color == 13);

        Console.WriteLine((Color)135);
        // Console.WriteLine(((Color)10).GetType().Name);
    }

}