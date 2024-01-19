using System.Numerics;

// #pragma warning disable
// T DoubleIt<T>(T number)
// {
//     return (dynamic)number * 2;
// }

// var twice = DoubleIt(12.4);
// Console.WriteLine(twice);

// class Vector<T, T2> where T : INumber<T> // int
// {
//     T data; // int data;
//     T more;
// }

// class MainProgram
// {
//     Vector<int, float> vector = new();
//     Vector<double, string> vector2 = new();

// }

T DoubleIt<T>(T number) where T : INumber<T>
{
    return (dynamic)number * 2;
}

var twice = DoubleIt(5);
Console.WriteLine(twice);
