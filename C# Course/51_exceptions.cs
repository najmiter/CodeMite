namespace CodeMite
{
     class CustomException : Exception
     {
          public CustomException(string msg) : base(msg)
          {

          }
     }
     class MainProgram
     {
          static void Main(string[] _)
          {
               try
               {
                    bool failure = false;
                    bool otherCondition = false;
                    if (failure)
                    {
                         throw new CustomException("Some kind of exception occurred.");
                    }
                    else if (otherCondition)
                    {
                         throw new ArgumentException("Invalid arguments.");
                    }

                    Console.WriteLine("Processing the data...");

                    // process the data here
                    ///
               }
               catch (ArgumentException ex)
               {
                    Console.WriteLine(ex.Message);
               }
               catch (CustomException ex)
               {
                    Console.WriteLine(ex.Message);
               }
               finally
               {
                    Console.WriteLine("Finally freeing the resources...");
               }
          }
     }
}
