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
				PrintLetter(letterTemplate, record.Name);
			}
		}

		static void PrintLetter(string letterTemplate, string name)
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
									MakeLetter(column, letterTemplate, name);
								});

							layers
								.Layer()
								.AlignCenter()
								.AlignBottom().Image("./assets/wave.png");

							layers
								.Layer()
								.AlignRight().AlignBottom()
								.PaddingRight(20).PaddingBottom(10)
								.Text($"© MagiCoders - {year}").FontSize(16).SemiBold().FontColor(Colors.Grey.Lighten4);
						});
					});
			})
			.GeneratePdf($"./letters/{name}.pdf");
		}

		static void MakeLetter(ColumnDescriptor column, string template, string name)
		{
			string firstName = name.Split(" ")[0];
			template = template.Replace("|%FULL-NAME|%", name).Replace("|%FIRST-NAME|%", firstName);

			var parts = template.Split("To Whom It May Concern:");
			column.Item().Text(parts[0]);
			column.Item().Text("To Whom It May Concern:").SemiBold();
			column.Item().Text(parts[1]);
		}
	}
}
