namespace CodeMite
{
     interface IPerson
     {
          // public string Name { get; set; }
          // public int Age { get; set; }

          string Who();
     }

     class Employee : IPerson
     {
          public string Who()
          {
               return ToString()?.Split('.')[^1] ?? string.Empty;
          }
     }

     class Manager : IPerson
     {
          public string Who()
          {
               return ToString()?.Split('.')[^1] ?? string.Empty;
          }
     }

     class MainProgram
     {
          static void Main(string[] _)
          {
               IPerson person = new Employee();
               Console.WriteLine(person.Who());

               person = new Manager();
               Console.WriteLine(person.Who());
          }
     }
}
