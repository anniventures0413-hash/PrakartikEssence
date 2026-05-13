Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Windows.Forms

$root = Split-Path -Parent $PSScriptRoot
$templatePath = Join-Path $root "assets\products\neem-powder.png"
$outDir = Join-Path $root "assets\products"

function Draw-CenteredText($g, $text, $font, $brush, $y, $width) {
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF(0, $y, $width, 72)
  $g.DrawString($text, $font, $brush, $rect, $format)
}

function Draw-PowderMound($g, $cx, $cy, $color) {
  $brush = New-Object System.Drawing.SolidBrush($color)
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 120, 90, 50), 3)
  $points = @(
    [System.Drawing.Point]::new($cx - 150, $cy + 70),
    [System.Drawing.Point]::new($cx - 80, $cy - 10),
    [System.Drawing.Point]::new($cx + 5, $cy - 55),
    [System.Drawing.Point]::new($cx + 95, $cy - 8),
    [System.Drawing.Point]::new($cx + 165, $cy + 70)
  )
  $g.FillClosedCurve($brush, $points)
  $g.DrawCurve($pen, $points)
  $brush.Dispose()
  $pen.Dispose()
}

function Draw-Leaf($g, $x, $y, $w, $h, $angle, $color) {
  $state = $g.Save()
  $g.TranslateTransform($x, $y)
  $g.RotateTransform($angle)
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddBezier(0, 0, $w * .55, -$h * .55, $w, -$h * .18, $w, 0)
  $path.AddBezier($w, 0, $w * .55, $h * .55, 0, $h * .32, 0, 0)
  $brush = New-Object System.Drawing.SolidBrush($color)
  $g.FillPath($brush, $path)
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(160, 255, 255, 255), 3)
  $g.DrawLine($pen, 5, 0, $w - 8, 0)
  $brush.Dispose()
  $pen.Dispose()
  $path.Dispose()
  $g.Restore($state)
}

function Draw-Bottle($g, $cx, $cy) {
  $pink = [System.Drawing.Color]::FromArgb(235, 180, 192)
  $rose = [System.Drawing.Color]::FromArgb(173, 83, 99)
  $brush = New-Object System.Drawing.SolidBrush($pink)
  $pen = New-Object System.Drawing.Pen($rose, 8)
  $body = New-RoundedRectPath ($cx - 70) ($cy - 105) 140 220 38
  $g.FillPath($brush, $body)
  $g.DrawPath($pen, $body)
  $cap = New-Object System.Drawing.SolidBrush($rose)
  $capPath = New-RoundedRectPath ($cx - 36) ($cy - 160) 72 70 16
  $g.FillPath($cap, $capPath)
  $white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(225, 255, 255, 255))
  $labelPath = New-RoundedRectPath ($cx - 48) ($cy - 18) 96 78 14
  $g.FillPath($white, $labelPath)
  $brush.Dispose(); $pen.Dispose(); $cap.Dispose(); $white.Dispose()
  $body.Dispose(); $capPath.Dispose(); $labelPath.Dispose()
}

function New-RoundedRectPath($x, $y, $w, $h, $r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-Label($fileName, $title, $powderColor, $kind) {
  $bmp = [System.Drawing.Bitmap]::FromFile($templatePath)
  $canvas = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)
  $g = [System.Drawing.Graphics]::FromImage($canvas)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($bmp, 0, 0, $bmp.Width, $bmp.Height)

  $cream = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(252, 246, 225))
  $g.FillRectangle($cream, 140, 640, 745, 520)
  $g.FillRectangle($cream, 180, 1160, 665, 95)

  $darkGreen = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(52, 72, 53))
  $fontTitle = New-Object System.Drawing.Font("Georgia", 39, [System.Drawing.FontStyle]::Bold)
  Draw-CenteredText $g $title $fontTitle $darkGreen 678 $bmp.Width

  $cx = [int]($bmp.Width / 2)
  $cy = 870
  if ($kind -eq "bottle") {
    Draw-Bottle $g $cx $cy
    Draw-Leaf $g ($cx - 170) ($cy + 54) 120 42 -18 ([System.Drawing.Color]::FromArgb(75, 140, 78))
    Draw-Leaf $g ($cx + 82) ($cy + 62) 120 42 198 ([System.Drawing.Color]::FromArgb(85, 150, 84))
  } else {
    Draw-PowderMound $g $cx ($cy + 38) $powderColor
    Draw-Leaf $g ($cx - 220) ($cy + 4) 160 52 -18 ([System.Drawing.Color]::FromArgb(82, 150, 65))
    Draw-Leaf $g ($cx + 70) ($cy + 8) 160 52 200 ([System.Drawing.Color]::FromArgb(92, 160, 72))
    if ($kind -eq "beetroot") {
      $beet = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(145, 32, 68))
      $g.FillEllipse($beet, $cx - 45, $cy - 72, 90, 90)
      $beet.Dispose()
    }
    if ($kind -eq "cucumber") {
      $green = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(116, 166, 106))
      $g.FillEllipse($green, $cx - 70, $cy - 50, 140, 62)
      $g.FillEllipse((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 235, 178))), $cx - 50, $cy - 43, 100, 48)
      $green.Dispose()
    }
    if ($kind -eq "alsi") {
      $seed = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(145, 88, 55))
      for ($i = 0; $i -lt 36; $i++) {
        $x = $cx - 115 + (($i * 29) % 220)
        $y = $cy - 50 + (($i * 17) % 98)
        $g.FillEllipse($seed, $x, $y, 22, 12)
      }
      $seed.Dispose()
    }
  }

  $greenStrip = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(47, 80, 26))
  $g.FillRectangle($greenStrip, 342, 1145, 340, 44)
  $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
  $fontStrip = New-Object System.Drawing.Font("Georgia", 16, [System.Drawing.FontStyle]::Bold)
  Draw-CenteredText $g "HERBAL HAIR & SKIN CARE" $fontStrip $whiteBrush 1132 $bmp.Width

  $out = Join-Path $outDir $fileName
  $canvas.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose(); $canvas.Dispose(); $g.Dispose()
  $cream.Dispose(); $darkGreen.Dispose(); $fontTitle.Dispose(); $greenStrip.Dispose(); $whiteBrush.Dispose(); $fontStrip.Dispose()
}

New-Label "alsi-powder.png" "ALSI POWDER" ([System.Drawing.Color]::FromArgb(186, 126, 72)) "alsi"
New-Label "beetroot-powder.png" "BEETROOT POWDER" ([System.Drawing.Color]::FromArgb(150, 35, 69)) "beetroot"
New-Label "gulab-jal.png" "GULAB JAL" ([System.Drawing.Color]::FromArgb(215, 138, 152)) "bottle"
New-Label "cucumber-powder.png" "CUCUMBER POWDER" ([System.Drawing.Color]::FromArgb(122, 166, 106)) "cucumber"
New-Label "hair-strength-blend.png" "HAIR STRENGTH BLEND" ([System.Drawing.Color]::FromArgb(116, 124, 61)) "powder"
New-Label "clear-skin-blend.png" "CLEAR SKIN BLEND" ([System.Drawing.Color]::FromArgb(78, 125, 84)) "powder"
New-Label "dried-leaves.png" "DRIED LEAVES" ([System.Drawing.Color]::FromArgb(173, 83, 99)) "powder"
