# Getting started

Add the [`QuestPDF`](https://www.questpdf.com/quick-start.html) package to your project.

```bash
dotnet add package QuestPDF
```

The `data.csv` should have the first two columns named: `name` and `joining_date`. (This might get fixed in the future :D But for now, it's compulsory that you do it this way.)

After creating your PDFs, build and run the project from the root of your project

```bash
dotnet build && dotnet run
# 'dotnet run' also builds the project before running.
```

⚠️ Make sure that you write the following statement in your `main.cs` if you're using the free version of the **QuestPDF**.

```cs
QuestPDF.Settings.License = LicenseType.Community;
```
