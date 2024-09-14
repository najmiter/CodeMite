using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace dotnet_pdf
{
  class Program
  {
    static void Main(string[] args)
    {
      QuestPDF.Settings.License = LicenseType.Community;
      Document.Create(container =>
      {
        container.Page(page =>
          {
            page.Size(PageSizes.A4);
            page.Margin(2, Unit.Centimetre);
            page.PageColor(Colors.White);
            page.DefaultTextStyle(x => x.FontSize(20));

            page.Header()
                    .Text("Hello PDF!")
                    .SemiBold().FontSize(36).FontColor(Colors.Blue.Medium);

            page.Content()
                    .PaddingVertical(1, Unit.Centimetre)
                    .Column(x =>
                    {
                      x.Spacing(20);

                      x.Item().Text(Placeholders.LoremIpsum()).FontSize(16);
                      x.Item().Image(Placeholders.Image(200, 100));
                    });

            page.Footer()
                    .AlignCenter()
                    .Text(x =>
                    {
                      x.Span("Page ");
                      x.CurrentPageNumber();
                      x.Span(Placeholders.DateTime());
                    });
          });
      })
      .GeneratePdf("hello.pdf");
    }
  }
}
