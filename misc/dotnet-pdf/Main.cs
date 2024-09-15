using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using dotnet_pdf.src.Reader;

namespace dotnet_pdf
{
	class Program
	{
		static void Main(string[] _)
		{
			QuestPDF.Settings.License = LicenseType.Community;
			var reader = new Reader();
			reader.ReadCsv();

			string letterTemplate = Reader.GetLetter();
			foreach (var record in reader.records)
			{
				if (record is null) break;
				System.Console.WriteLine(record.JoiningDate.ToString("MMMM dd, yyyy"));
				PrintLetter(letterTemplate, record);
			}
		}

		static void PrintLetter(string letterTemplate, Record record)
		{
			var year = DateTime.Now.Year;

			Document.Create(container =>
			{
				container.Page(page =>
					{
						page.Size(PageSizes.Letter);
						page.Margin(0, Unit.Centimetre);
						page.PageColor(Colors.White);
						page.DefaultTextStyle(x => x.FontSize(14));

						page.Header()
							.PaddingTop(20)
							.Text("Recommendation Letter by MagiCoders").AlignCenter()
							.Bold().FontSize(28).Underline().FontColor(Colors.Blue.Medium);

						page.Content().Layers(layers =>
						{
							layers
								.Layer()
								.Height(100).Width(100)
								.AlignRight().AlignMiddle().Padding(20)
								.Background(Colors.Grey.Lighten3);

							layers
								.PrimaryLayer().Padding(25)
								.Column(column =>
								{
									column.Spacing(5);
									MakeLetter(column, letterTemplate, record);
								});

							layers
								.Layer()
								.AlignCenter()
								.AlignBottom().Image("./assets/wave.png");

							layers
								.Layer()
								.AlignBottom().AlignCenter()
								.PaddingRight(20).PaddingBottom(10)
								.Row(row =>
								{
									row.AutoItem().PaddingTop(10).Text($"© MagiCoders - {year}").FontSize(12).SemiBold().FontColor("#ddd").AlignLeft();
									row.ConstantItem(200);
									row.AutoItem().Text($"Presented to {record.Name}\nID: {new Random().Next()}").FontSize(12).SemiBold().FontColor("#ddd").AlignLeft();
								});
						});
					});
			})
			.GeneratePdf($"./letters/{record.Name}.pdf");
		}

		static void MakeLetter(ColumnDescriptor column, string template, Record record)
		{
			string firstName = record.Name.Split(" ")[0];
			template = template
									.Replace("|%FULL-NAME|%", record.Name)
									.Replace("|%FIRST-NAME|%", firstName)
									.Replace("|%STARTING-DATE|%", record.JoiningDate.ToString("MMMM dd, yyyy"))
									.Replace("|%ENDING-DATE|%", record.JoiningDate.AddMonths(1).ToString("MMMM dd, yyyy"));

			var parts = template.Split("To Whom It May Concern:");
			column.Item().Text(parts[0]);
			column.Item().Text("To Whom It May Concern:").SemiBold();
			column.Item().Text(parts[1]);
		}
	}
}
