namespace dotnet_pdf.src.Reader
{
  public record Record(string Name, DateOnly JoiningDate);
  class Reader()
  {
    readonly static string _path = $"{Directory.GetCurrentDirectory()}/assets/";
    public List<Record> records = [];

    public void ReadCsv(string fileName = "data.csv")
    {
      var stream = new StreamReader($"{_path}{fileName}");
      var columns = stream.ReadLine();
      if (columns is null) { stream.Close(); return; }

      while (true)
      {
        var record = stream.ReadLine();

        if (record is null) { stream.Close(); break; }

        var values = record.Split(",");
        string name = values[0];
        string date = values[1];

        records.Add(new Record(name, DateOnly.Parse(date)));
      }
    }

    public static string GetLetter()
    {
      using var reader = new StreamReader($"{_path}template.txt");
      return reader.ReadToEnd();
    }


  }
}