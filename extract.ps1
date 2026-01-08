$word = New-Object -ComObject Word.Application
$word.Visible = $false

$doc = $word.Documents.Open("C:\Users\Jacqu\OneDrive\Projects\suédois\Suédois niveau 2.docx")
$doc.Content.Text | Out-File -FilePath "C:\Users\Jacqu\OneDrive\Projects\suédois\niveau2.txt" -Encoding UTF8
$doc.Close()

$doc = $word.Documents.Open("C:\Users\Jacqu\OneDrive\Projects\suédois\Suédois niveau 3.docx")
$doc.Content.Text | Out-File -FilePath "C:\Users\Jacqu\OneDrive\Projects\suédois\niveau3.txt" -Encoding UTF8
$doc.Close()

$doc = $word.Documents.Open("C:\Users\Jacqu\OneDrive\Projects\suédois\Svenska minigrammatik .docx")
$doc.Content.Text | Out-File -FilePath "C:\Users\Jacqu\OneDrive\Projects\suédois\grammar.txt" -Encoding UTF8
$doc.Close()

$word.Quit()
Write-Host "Extraction complete!"
