namespace CodeMite
{
     class MainProgram
     {
          // static bool isOdd(int n)
          // {
          //      return n % 2 == 1;
          // }

          static void Main(string[] _)
          {
               List<int> ints = new() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

               List<int> odds = ints.Where((int n) => n % 2 == 1).ToList();

               foreach (var n in odds)
               {
                    Console.WriteLine(n);
               }


               // Func<int, bool> isOdd = (int n) => n % 2 == 1;

               // var isEven = (int n) =>
               // {
               //      Console.WriteLine("inside the lambda");
               //      return n % 2 == 0;
               // };

               // Console.WriteLine(isOdd(6));
          }
     }
}
