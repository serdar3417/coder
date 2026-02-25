const lessonData = {
    html: [
        {
            id: 1,
            title: "HTML Dünyasına Giriş",
            theory: `
                <h3>👋 HTML Nedir?</h3>
                <p>HTML (<strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage), web sayfalarının iskeletini oluşturur. Bir binanın tuğlaları gibidir.</p>
                <div class="code-block">
                    <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Merhaba Dünya!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
                </div>
            `,
            tips: "Unutma: <html> her şeyin kapsayıcısıdır, <body> ise kullanıcıların gördüğü kısımdır.",
            question: "Sayfanın en büyük ana başlığını oluşturmak için hangi etiket kullanılır?",
            options: ["<head>", "<h6>", "<h1>", "<title>"],
            answer: 2,
            points: 50
        },
        {
            id: 2,
            title: "Bağlantılar ve Görseller",
            theory: `
                <h3>🔗 Link Vermek (Anchor)</h3>
                <p>Sayfalar arası geçiş için <code>&lt;a&gt;</code> etiketi kullanılır.</p>
                <pre><code class="language-html">&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</code></pre>

                <h3>🖼️ Görsel Eklemek</h3>
                <p>Resimler için <code>&lt;img&gt;</code> kullanılır. Kapanış etiketi yoktur.</p>
                <pre><code class="language-html">&lt;img src="kedi.jpg" alt="Kedi"&gt;</code></pre>
            `,
            tips: "Görsellerde 'alt' etiketi SEO ve erişilebilirlik için çok önemlidir!",
            question: "Bir resim dosyası belirtmek için <img> etiketi içinde hangi özellik kullanılır?",
            options: ["href", "link", "src", "source"],
            answer: 2,
            points: 50
        },
        {
            id: 3,
            title: "Listeler ve Tablolar",
            theory: `
                <h3>📝 Listeler</h3>
                <ul>
                    <li><strong>Sırasız (ul):</strong> Maddeler (Noktalı).</li>
                    <li><strong>Sıralı (ol):</strong> Numaralı (1, 2, 3...).</li>
                </ul>
                <pre><code class="language-html">&lt;ul&gt;
  &lt;li&gt;Elma&lt;/li&gt;
  &lt;li&gt;Armut&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            `,
            tips: "Her liste maddesi <li> (List Item) etiketiyle belirtilmelidir.",
            question: "Numaralandırılmış (1, 2, 3) bir liste oluşturmak için hangi etiket kullanılır?",
            options: ["<ul>", "<dl>", "<list>", "<ol>"],
            answer: 3,
            points: 50
        },
        {
            id: 4,
            title: "Formlar ve Girdiler",
            theory: `
                <h3>📝 Kullanıcıdan Veri Alma</h3>
                <p>Formlar, kullanıcıların bilgi girmesini sağlar.</p>
                <pre><code class="language-html">&lt;form&gt;
  &lt;label&gt;Adınız:&lt;/label&gt;
  &lt;input type="text" placeholder="Adınızı girin"&gt;
  &lt;button type="submit"&gt;Gönder&lt;/button&gt;
&lt;/form&gt;</code></pre>
                <p><strong>Input Türleri:</strong> text, password, email, number, checkbox...</p>
            `,
            tips: "Şifre girişleri için type='password' kullanırsan karakterler gizlenir (***).",
            question: "Kullanıcının metin girmesini sağlayan etiket hangisidir?",
            options: ["<input type='text'>", "<text>", "<write>", "<input type='box'>"],
            answer: 0,
            points: 50
        },
        {
            id: 5,
            title: "Blok ve Inline Elementler",
            theory: `
                <h3>🧱 Blok vs Inline</h3>
                <p><strong>Blok Elementler:</strong> Tüm satırı kaplar. Yeni satırdan başlar.</p>
                <ul><li>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, &lt;form&gt;</li></ul>
                
                <p><strong>Inline Elementler:</strong> Sadece içeriği kadar yer kaplar. Yan yana durabilir.</p>
                <ul><li>&lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;strong&gt;</li></ul>
            `,
            tips: "Bir <div> içine her şeyi koyabilirsin ancak bir <span> içine blok element koymamalısın.",
            question: "Hangisi tüm satırı kaplayan bir BLOK elementtir?",
            options: ["<span>", "<a>", "<div>", "<b>"],
            answer: 2,
            points: 50
        },
        {
            id: 6,
            title: "Semantik HTML",
            theory: `
                <h3>Meaningful Tags (Anlamlı Etiketler)</h3>
                <p>Sadece &lt;div&gt; kullanmak yerine anlamlı etiketler kullanmalıyız. Bu, arama motorları (SEO) için önemlidir.</p>
                <ul>
                    <li><code>&lt;header&gt;</code>: Sayfa veya bölüm başlığı.</li>
                    <li><code>&lt;nav&gt;</code>: Menüler.</li>
                    <li><code>&lt;main&gt;</code>: Ana içerik.</li>
                    <li><code>&lt;footer&gt;</code>: Alt bilgi.</li>
                    <li><code>&lt;article&gt;</code>: Makale, haber yazısı.</li>
                </ul>
            `,
            tips: "Google, sayfanı tararken <nav> gördüğünde bunun bir menü olduğunu anlar.",
            question: "Sayfanın ana içeriğini belirtmek için en uygun semantik etiket hangisidir?",
            options: ["<content>", "<main>", "<body>", "<center>"],
            answer: 1,
            points: 50
        },
        {
            id: 7,
            title: "Medya Elementleri (Ses ve Video)",
            theory: `
                <h3>🎵 Ses ve Video</h3>
                <p>Sayfana medya eklemek çok kolaydır.</p>
                
                <strong>Ses:</strong>
                <pre><code class="language-html">&lt;audio controls&gt;
  &lt;source src="muzik.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</code></pre>

                <strong>Video:</strong>
                <pre><code class="language-html">&lt;video width="320" height="240" controls&gt;
  &lt;source src="film.mp4" type="video/mp4"&gt;
&lt;/video&gt;</code></pre>
            `,
            tips: "'controls' özelliğini eklemezsen oynatma tuşları görünmez!",
            question: "Bir videonun oynatma/durdurma kontrollerinin görünmesi için hangi özellik eklenmelidir?",
            options: ["play", "show-controls", "controls", "buttons"],
            answer: 2,
            points: 50
        },
        {
            id: 8,
            title: "Tablolar (Gelişmiş)",
            theory: `
                <h3>📊 Detaylı Tablolar</h3>
                <pre><code class="language-html">&lt;table border="1"&gt;
  &lt;thead&gt; <!-- Başlık Grubu -->
    &lt;tr&gt;
      &lt;th&gt;Ad&lt;/th&gt;
      &lt;th&gt;Puan&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt; <!-- İçerik Grubu -->
    &lt;tr&gt;
      &lt;td&gt;Ali&lt;/td&gt;
      &lt;td&gt;90&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            `,
            tips: "<thead>, <tbody> ve <tfoot> kullanmak tablonun daha düzenli olmasını sağlar.",
            question: "Tablodaki başlık hücresini (koyu yazılan) belirtmek için hangi etiket kullanılır?",
            options: ["<td>", "<head>", "<th>", "<tb>"],
            answer: 2,
            points: 50
        },
        {
            id: 9,
            title: "HTML5 Form Özellikleri",
            theory: `
                <h3>✨ Yeni Girdi Türleri</h3>
                <p>HTML5 ile gelen harika input tipleri:</p>
                <ul>
                    <li><code>type="date"</code>: Takvim açar.</li>
                    <li><code>type="color"</code>: Renk seçici açar.</li>
                    <li><code>type="range"</code>: Kaydırma çubuğu.</li>
                    <li><code>required</code>: Zorunlu alan yapar.</li>
                </ul>
            `,
            tips: "<input type='email'> kullanırsan mobilde klavyede @ işareti otomatik çıkar.",
            question: "Bir form alanının boş bırakılmasını engellemek için hangi özellik eklenir?",
            options: ["validate", "mandatory", "required", "urgent"],
            answer: 2,
            points: 50
        },
        {
            id: 10,
            title: "Metadata ve SEO",
            theory: `
                <h3>🕵️ Meta Etiketleri</h3>
                <p>&lt;head&gt; kısmında bulunur, kullanıcı görmez ama tarayıcı ve Google görür.</p>
                <pre><code class="language-html">&lt;meta charset="UTF-8"&gt; <!-- Türkçe karakter desteği -->
&lt;meta name="description" content="Kodlama öğrenme sitesi"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; <!-- Mobil uyum --></code></pre>
            `,
            tips: "Mobil uyumlu bir site için 'viewport' meta etiketi ZORUNLUDUR.",
            question: "Türkçe karakterlerin (ş, ğ, ü) düzgün görünmesi için hangi charset kullanılmalıdır?",
            options: ["ISO-8859-1", "UTF-8", "ASCII", "ANSI"],
            answer: 1,
            points: 50
        }
    ],
    css: [
        {
            id: 1,
            title: "CSS'e Giriş",
            theory: `
                <h3>🎨 CSS Nedir?</h3>
                <p>CSS (Cascading Style Sheets), HTML elementlerinin nasıl görüneceğini belirler.</p>
                <pre><code class="language-css">p {
  color: red; /* Yazı rengi */
  font-size: 20px; /* Yazı boyutu */
}</code></pre>
            `,
            tips: "CSS kodlarını <style> etiketi içine veya harici .css dosyasına yazabilirsin.",
            question: "CSS'in açılımı nedir?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style System", "Color Style Sheets"],
            answer: 1,
            points: 50
        },
        {
            id: 2,
            title: "Seçiciler (Selectors)",
            theory: `
                <h3>🎯 Hedefi Seçmek</h3>
                <ul>
                    <li><strong>Element Seçici:</strong> <code>p { ... }</code> (Tüm paragraflar)</li>
                    <li><strong>ID Seçici (#):</strong> <code>#header { ... }</code> (Tek bir özel eleman)</li>
                    <li><strong>Class Seçici (.):</strong> <code>.btn { ... }</code> (Bir grup eleman)</li>
                </ul>
            `,
            tips: "ID'ler (#) sayfada benzersiz olmalıdır, Class'lar (.) birden çok yerde kullanılabilir.",
            question: "Bir class (sınıf) seçmek için hangi işaret kullanılır?",
            options: ["# (Kare)", ". (Nokta)", "* (Yıldız)", "> (Büyüktür)"],
            answer: 1,
            points: 50
        },
        {
            id: 3,
            title: "Renkler ve Arka Planlar",
            theory: `
                <h3>🌈 Renk Kodları</h3>
                <p>Renkleri ismen (red), HEX (#ff0000) veya RGB (rgb(255,0,0)) olarak verebilirsin.</p>
                <pre><code class="language-css">body {
  background-color: #f0f0f0; /* Açık gri */
  color: #333; /* Koyu gri yazı */
}</code></pre>
            `,
            tips: "#FFFFFF beyaz, #000000 siyahtır.",
            question: "Yazının arka plan rengini değiştirmek için hangi özellik kullanılır?",
            options: ["color", "bg-color", "background-color", "area-color"],
            answer: 2,
            points: 50
        },
        {
            id: 4,
            title: "Kutu Modeli (Box Model)",
            theory: `
                <h3>📦 Her Şey Bir Kutudur</h3>
                <pre><code class="language-css">div {
  width: 100px;
  padding: 10px; /* İç boşluk (Kutu şişer) */
  border: 1px solid black; /* Kenarlık */
  margin: 20px; /* Dış boşluk (Kutuyu iter) */
}</code></pre>
            `,
            tips: "Margin dışarıyı, Padding içeriyi etkiler.",
            question: "İçerik ile kenarlık (border) arasındaki boşluğa ne denir?",
            options: ["margin", "border-spacing", "padding", "gap"],
            answer: 2,
            points: 50
        },
        {
            id: 5,
            title: "Yazı Stilleri (Typography)",
            theory: `
                <h3>✍️ Yazı Tipleri</h3>
                <pre><code class="language-css">h1 {
  font-family: 'Arial', sans-serif;
  font-weight: bold; /* Kalınlık */
  font-style: italic; /* Eğik */
  text-decoration: underline; /* Altı çizili */
  text-align: center; /* Ortala */
}</code></pre>
            `,
            tips: "Google Fonts kullanarak harika yazı tipleri ekleyebilirsin.",
            question: "Metni kalın (bold) yapmak için hangi özellik kullanılır?",
            options: ["font-style", "text-weight", "font-weight", "bold-text"],
            answer: 2,
            points: 50
        },
        {
            id: 6,
            title: "Flexbox Düzeni",
            theory: `
                <h3>🧱 Flexbox</h3>
                <p>Yan yana dizmek için en modern yöntem.</p>
                <pre><code class="language-css">.container {
  display: flex;
  justify-content: center; /* Yatayda ortala */
  align-items: center; /* Dikeyde ortala */
}</code></pre>
            `,
            tips: "Flexbox hayat kurtarır! 'float' kullanmayı bırak.",
            question: "Flexbox kapsayıcısı içindeki öğeleri YATAY eksende hizalamak için hangisi kullanılır?",
            options: ["align-items", "justify-content", "flex-direction", "align-content"],
            answer: 1,
            points: 50
        },
        {
            id: 7,
            title: "Konumlandırma (Position)",
            theory: `
                <h3>📍 Nerede Duracak?</h3>
                <ul>
                    <li><code>static</code>: Varsayılan.</li>
                    <li><code>relative</code>: Kendine göre kaydırır.</li>
                    <li><code>absolute</code>: En yakın kapsayıcıya göre.</li>
                    <li><code>fixed</code>: Ekrana yapışır (Scrool etsen de gitmez).</li>
                </ul>
            `,
            tips: "Menü çubuğunun sayfanın üstüne yapışması için 'position: fixed' kullanılır.",
            question: "Bir öğeyi sayfa kaydırılsa bile ekranda sabit tutmak için hangi position değeri kullanılır?",
            options: ["absolute", "sticky", "fixed", "relative"],
            answer: 2,
            points: 50
        },
        {
            id: 8,
            title: "Sözde Sınıflar (Hover)",
            theory: `
                <h3>🖱️ Etkileşim</h3>
                <p>Kullanıcı etkileşimine göre stil değiştirme.</p>
                <pre><code class="language-css">button:hover {
  background-color: blue; /* Üzerine gelince mavi ol */
  cursor: pointer; /* El işareti çıksın */
}</code></pre>
            `,
            tips: ":active tıklama anını, :focus (inputlar için) odaklanma anını temsil eder.",
            question: "Fare ile bir öğenin üzerine gelindiğinde stil değiştirmek için hangisi kullanılır?",
            options: [":click", ":mouse-over", ":hover", ":on-top"],
            answer: 2,
            points: 50
        },
        {
            id: 9,
            title: "Geçişler (Transitions)",
            theory: `
                <h3>🎬 Animasyon Gibi</h3>
                <p>Değişikliklerin yumuşak olmasını sağlar.</p>
                <pre><code class="language-css">button {
  transition: background-color 0.5s; /* Renk değişimi yarım saniye sürsün */
}
button:hover {
  background-color: red;
}</code></pre>
            `,
            tips: "Transition olmadan hover efektleri çok sert ve ani görünür.",
            question: "Bir stil değişikliğinin zamana yayılarak yumuşak olmasını sağlayan özellik nedir?",
            options: ["animation", "transform", "transition", "delay"],
            answer: 2,
            points: 50
        },
        {
            id: 10,
            title: "Responsive (Mobil Uyum)",
            theory: `
                <h3>📱 Medya Sorguları</h3>
                <p>Ekran boyutuna göre farklı kurallar yazmak.</p>
                <pre><code class="language-css">@media (max-width: 600px) {
  body {
    background-color: lightblue; /* Sadece mobilde mavi olsun */
  }
}</code></pre>
            `,
            tips: "Önce mobil tasarımı yapmak (Mobile-First) her zaman daha iyi sonuç verir.",
            question: "Belirli ekran boyutları için özel CSS yazmamızı sağlayan yapı nedir?",
            options: ["@screen", "@media", "@mobile", "@responsive"],
            answer: 1,
            points: 50
        }
    ],
    javascript: [
        {
            id: 1,
            title: "JS Basics: Değişkenler",
            theory: `
                <h3>📦 Veri Saklama</h3>
                <pre><code class="language-javascript">let isim = "Ali"; // Değişebilir
const pi = 3.14; // Değişemez (Sabit)
var x = 5; // Eski yöntem</code></pre>
            `,
            tips: "Mümkünse hep 'const' kullan, değişmesi gerekiyorsa 'let' kullan.",
            question: "Değeri sonradan DEĞİŞTİRİLEMEYECEK bir değişken için hangisi kullanılır?",
            options: ["var", "let", "const", "def"],
            answer: 2,
            points: 50
        },
        {
            id: 2,
            title: "JS Veri Tipleri",
            theory: `
                <h3>📊 Türler</h3>
                <ul>
                    <li><strong>String:</strong> Metin ("Merhaba")</li>
                    <li><strong>Number:</strong> Sayı (10, 3.5)</li>
                    <li><strong>Boolean:</strong> Mantıksal (true, false)</li>
                </ul>
            `,
            tips: "typeof komutu ile bir değişkenin türünü öğrenebilirsin. 'typeof 5' -> 'number'",
            question: "JavaScript'te 'true' veya 'false' değerini alan veri tipi hangisidir?",
            options: ["String", "Boolean", "Number", "Object"],
            answer: 1,
            points: 50
        },
        {
            id: 3,
            title: "Koşullar (If/Else)",
            theory: `
                <h3>🤔 Karar Yapıları</h3>
                <pre><code class="language-javascript">let yas = 18;
if (yas >= 18) {
  console.log("Ehliyet alabilirsin");
} else {
  console.log("Bekle biraz!");
}</code></pre>
            `,
            tips: "=== operatörü hem değeri hem de türü kontrol eder. (5 === '5' yanlıştır)",
            question: "Bir koşulun DOĞRU olup olmadığını kontrol eden yapı hangisidir?",
            options: ["loop", "for", "if", "switch"],
            answer: 2,
            points: 50
        },
        {
            id: 4,
            title: "Fonksiyonlar",
            theory: `
                <h3>⚙️ İş Yapan Makineler</h3>
                <pre><code class="language-javascript">function topla(a, b) {
  return a + b;
}
let sonuc = topla(5, 3); // 8</code></pre>
            `,
            tips: "Fonksiyonlar kod tekrarını önler.",
            question: "Bir fonksiyondan değer döndürmek için hangi kelime kullanılır?",
            options: ["break", "return", "continue", "send"],
            answer: 1,
            points: 50
        },
        {
            id: 5,
            title: "Diziler (Arrays)",
            theory: `
                <h3>📝 Listeler</h3>
                <p>Birden çok veriyi tek kutuda tutar.</p>
                <pre><code class="language-javascript">let meyveler = ["Elma", "Armut", "Muz"];
console.log(meyveler[0]); // Elma</code></pre>
            `,
            tips: "Dizilerin ilk elemanı her zaman 0. indekstedir!",
            question: "Bir dizinin ilk elemanına ulaşmak için hangi indeks kullanılır?",
            options: ["1", "0", "-1", "first"],
            answer: 1,
            points: 50
        },
        {
            id: 6,
            title: "Objeler (Objects)",
            theory: `
                <h3>🗂️ Gelişmiş Veri</h3>
                <p>Anahtar-Değer (Key-Value) çiftleri.</p>
                <pre><code class="language-javascript">const araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2020
};
console.log(araba.marka); // Toyota</code></pre>
            `,
            tips: "Gerçek dünyadaki nesneleri modellemek için kullanılır.",
            question: "Objenin bir özelliğine ulaşmak için hangi işaret kullanılır?",
            options: [", (Virgül)", ": (İki Nokta)", ". (Nokta)", "# (Kare)"],
            answer: 2,
            points: 50
        },
        {
            id: 7,
            title: "Döngüler (Loops)",
            theory: `
                <h3>🔄 Tekrar Eden İşler</h3>
                <p>Aynı kodu defalarca çalıştırmak için.</p>
                <pre><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}</code></pre>
            `,
            tips: "Sonsuz döngüye girmemeye dikkat et! Tarayıcıyı dondurabilirsin.",
            question: "Belirli bir sayıda tekrar eden işlemler için en sık kullanılan döngü hangisidir?",
            options: ["while", "for", "if", "foreach"],
            answer: 1,
            points: 50
        },
        {
            id: 8,
            title: "DOM Manipülasyonu",
            theory: `
                <h3>🌐 Sayfayı Değiştirmek</h3>
                <p>JS ile HTML'i kontrol edebilirsin.</p>
                <pre><code class="language-javascript">document.getElementById("baslik").innerHTML = "Yeni Başlık";
document.querySelector(".kutu").style.color = "red";</code></pre>
            `,
            tips: "DOM (Document Object Model) sayfanın ağaç yapısıdır.",
            question: "ID'si 'test' olan bir elementi seçmek için hangi komut kullanılır?",
            options: ["getElementByName", "querySelector('.test')", "getElementById('test')", "selectAll"],
            answer: 2,
            points: 50
        },
        {
            id: 9,
            title: "Olaylar (Events)",
            theory: `
                <h3>🖱️ Tıklama ve Etkileşim</h3>
                <pre><code class="language-javascript">let buton = document.getElementById("btn");
buton.addEventListener("click", function() {
  alert("Tıklandı!");
});</code></pre>
            `,
            tips: "click, mouseover, keydown en sık kullanılan olaylardır.",
            question: "Bir butona tıklanma olayını dinlemek için hangisi kullanılır?",
            options: ["hover", "click", "submit", "change"],
            answer: 1,
            points: 50
        },
        {
            id: 10,
            title: "Matematik ve Rastgelelik",
            theory: `
                <h3>🧮 Math Kütüphanesi</h3>
                <pre><code class="language-javascript">Math.round(4.7); // 5 (Yuvarlama)
Math.floor(4.9); // 4 (Aşağı Yuvarlama)
Math.random(); // 0 ile 1 arası rastgele sayı</code></pre>
            `,
            tips: "Rastgele sayı üretmek oyun yapımında çok önemlidir.",
            question: "4.3 sayısını EN YAKIN tam sayıya yuvarlamak için hangisi kullanılır?",
            options: ["Math.ceil", "Math.floor", "Math.round", "Math.random"],
            answer: 2,
            points: 50
        }
    ]
};

// ================= HTML FINAL EXAM (20 QUESTIONS) =================
lessonData.htmlExam = [
    // --- PART 1: FIX (Hata Düzeltme) ---
    {
        id: "h_fix_1", type: "fix", title: "Temel Yapı Hatası",
        text: "Bu HTML iskeletinde bir şeyler ters gidiyor. Hataları düzelt!",
        code: "<html>\n  <head>\n  <title>Sitem</title>\n  <body>\n    <h1>Merhaba</h1>\n  </body>\n</html>",
        correct: "<html><head><title>Sitem</title></head><body><h1>Merhaba</h1></body></html>",
        hint1: "<head> etiketi kapatılmamış.", hint2: "</head> kapanış etiketini title'dan sonra ekle."
    },
    {
        id: "h_fix_2", type: "fix", title: "Yanlış Görsel Etiketi",
        text: "Resim eklemeye çalışıyorum ama görünmüyor. Kodda bir gariplik var.",
        code: "<image source='kedi.jpg' alt='Kedi'>",
        correct: "<img src='kedi.jpg' alt='Kedi'>",
        hint1: "HTML'de <image> diye bir etiket yoktur.", hint2: "'src' özelliği kullanılmalı, 'source' değil."
    },
    {
        id: "h_fix_3", type: "fix", title: "Link Hatası",
        text: "Linke tıklayınca Google'a gitmesi lazım ama kod bozuk.",
        code: "<a link='https://google.com'>Google</a>",
        correct: "<a href='https://google.com'>Google</a>",
        hint1: "Link vermek için 'link' özelliği kullanılmaz.", hint2: "'href' özelliğini kullan."
    },
    {
        id: "h_fix_4", type: "fix", title: "Liste Karmaşası",
        text: "Sıralı liste (1, 2, 3) yapmak istedim ama noktalı oldu. Düzeltir misin?",
        code: "<ul>\n  <li>Bir</li>\n  <li>İki</li>\n</ul>",
        correct: "<ol><li>Bir</li><li>İki</li></ol>",
        hint1: "<ul> sırasız (unordered) listedir.", hint2: "<ol> (ordered list) kullanmalısın."
    },
    {
        id: "h_fix_5", type: "fix", title: "Input Tipi Girişi",
        text: "Şifre girerken harfler görünüyor! Gizlenmesi lazım.",
        code: "<input type='text' placeholder='Şifre'>",
        correct: "<input type='password' placeholder='Şifre'>",
        hint1: "type='text' her şeyi gösterir.", hint2: "type='password' kullan."
    },
    {
        id: "h_fix_6", type: "fix", title: "Tablo Eksikliği",
        text: "Tablo satırı oluşturmaya çalıştım ama hücre etiketleri yanlış.",
        code: "<tr>\n  <tb>İsim</tb>\n  <tb>Puan</tb>\n</tr>",
        correct: "<tr><td>İsim</td><td>Puan</td></tr>",
        hint1: "<tb> diye bir etiket yoktur.", hint2: "Table Data için <td> kullan."
    },
    {
        id: "h_fix_7", type: "fix", title: "Buton Çalışmıyor",
        text: "Bu buton bir forma ait olmalıydı ama kapanış etiketi yok.",
        code: "<button type='submit'>Gönder",
        correct: "<button type='submit'>Gönder</button>",
        hint1: "Etiketler kapatılmalıdır.", hint2: "</button> eksik."
    },

    // --- PART 2: FILL (Boşluk Doldurma) ---
    {
        id: "h_fill_1", type: "fill", title: "Ana Başlık",
        text: "Sayfanın en büyük başlığını oluşturmak için eksik etiketi tamamla.",
        code: "<{{input}}>En Büyük Başlık</{{input}}>",
        answers: ["h1", "h1"],
        hint1: "En büyük başlık 1 numaradır.", hint2: "h1 etiketini kullan."
    },
    {
        id: "h_fill_2", type: "fill", title: "Paragraf Oluşturma",
        text: "Bir metin bloğu oluşturmak için p etiketini kullan.",
        code: "<{{input}}>Bu bir paragraftır.</{{input}}>",
        answers: ["p", "p"],
        hint1: "Paragraph kelimesinin baş harfi.", hint2: "p etiketi."
    },
    {
        id: "h_fill_3", type: "fill", title: "Resim Genişliği",
        text: "Resmin genişliğini 300 piksel yap.",
        code: "<img src='logo.png' {{input}}='300'>",
        answers: ["width"],
        hint1: "Genişlik İngilizce'de ne demek?", hint2: "width."
    },
    {
        id: "h_fill_4", type: "fill", title: "Form Gönderme",
        text: "Formun nereye gönderileceğini belirten özelliği yaz.",
        code: "<form {{input}}='/login'>...</form>",
        answers: ["action"],
        hint1: "Hareket, eylem anlamında bir kelime.", hint2: "action özelliği."
    },
    {
        id: "h_fill_5", type: "fill", title: "Satır İçi Stil",
        text: "Doğrudan HTML içinde stil vermek için hangi özellik kullanılır?",
        code: "<div {{input}}='color: red;'>Kırmızı Yazı</div>",
        answers: ["style"],
        hint1: "Stil vermek için...", hint2: "style özelliği."
    },
    {
        id: "h_fill_6", type: "fill", title: "Satır Sonu",
        text: "Alt satıra geçmek için kullanılan boş etiket nedir?",
        code: "Satır 1<{{input}}>Satır 2",
        answers: ["br"],
        hint1: "Break (Kırmak) kelimesinin kısaltması.", hint2: "br etiketi."
    },
    {
        id: "h_fill_7", type: "fill", title: "Checkbox",
        text: "Kullanıcıya işaretleme kutusu sunmak için tipi ne olmalı?",
        code: "<input type='{{input}}'> Beni Hatırla",
        answers: ["checkbox"],
        hint1: "Kontrol kutusu anlamına gelir.", hint2: "checkbox."
    },

    // --- PART 3: SORT (Sıralama) ---
    {
        id: "h_sort_1", type: "sort", title: "HTML5 İskeleti",
        text: "Standart bir HTML sayfasının yapısını doğru sıraya diz.",
        lines: [
            { id: "1", text: "<!DOCTYPE html>" },
            { id: "2", text: "<html>" },
            { id: "3", text: "<body>" },
            { id: "4", text: "</body>" },
            { id: "5", text: "</html>" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "DOCTYPE her zaman en başta olur.", hint2: "html etiketi her şeyi kapsar."
    },
    {
        id: "h_sort_2", type: "sort", title: "Tablo Yapısı",
        text: "Bir tablonun hiyerarşisini doğru kur.",
        lines: [
            { id: "1", text: "<table>" },
            { id: "2", text: "<tr>" },
            { id: "3", text: "<td>Veri</td>" },
            { id: "4", text: "</tr>" },
            { id: "5", text: "</table>" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "Tablo -> Satır -> Veri sırasıyla gitmeli.", hint2: "table > tr > td."
    },
    {
        id: "h_sort_3", type: "sort", title: "İç İçe Liste",
        text: "Listeleri doğru şekilde iç içe yerleştir.",
        lines: [
            { id: "1", text: "<ul>" },
            { id: "2", text: "<li>Meyveler</li>" },
            { id: "3", text: "<ul><li>Elma</li></ul>" },
            { id: "4", text: "</ul>" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Ana liste açılır, madde eklenir, alt liste eklenir.", hint2: "Mantıklı bir ağaç yapısı kur."
    },
    {
        id: "h_sort_4", type: "sort", title: "Form Elemanları",
        text: "Form etiketinin kapanışını doğru yere koy.",
        lines: [
            { id: "1", text: "<form>" },
            { id: "2", text: "<input type='text'>" },
            { id: "3", text: "<button>Gönder</button>" },
            { id: "4", text: "</form>" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Form açılır, elemanlar girer, form kapanır.", hint2: "Basit bir kapsayıcı mantığı."
    },
    {
        id: "h_sort_5", type: "sort", title: "Medya Ekleme",
        text: "Video etiketini ve kaynağını doğru sırala.",
        lines: [
            { id: "1", text: "<video width='320' controls>" },
            { id: "2", text: "<source src='movie.mp4'>" },
            { id: "3", text: "</video>" }
        ],
        order: ["1", "2", "3"],
        hint1: "Video etiketi açılır, kaynak (source) belirtilir, video kapanır.", hint2: "source etiketi video'nun içindedir."
    },
    {
        id: "h_sort_6", type: "sort", title: "Başlık Hiyerarşisi",
        text: "Başlıkları büyükten küçüğe sırala.",
        lines: [
            { id: "1", text: "<h1>Ana Başlık</h1>" },
            { id: "2", text: "<h2>Alt Başlık</h2>" },
            { id: "3", text: "<h3>Detay Başlık</h3>" }
        ],
        order: ["1", "2", "3"],
        hint1: "h1 en büyüktür.", hint2: "Sayı arttıkça başlık küçülür."
    }
];

// ================= CSS FINAL EXAM (20 QUESTIONS) =================
lessonData.cssExam = [
    // --- PART 1: FIX ---
    {
        id: "c_fix_1", type: "fix", title: "Renk Sözdizimi",
        text: "Arka planı kırmızı yapmak istiyorum ama bir şeyler yanlış.",
        code: "body { background = red; }",
        correct: "body { background: red; }",
        hint1: "CSS'de atama operatörü eşittir (=) değildir.", hint2: "İki nokta üst üste (:) kullan."
    },
    {
        id: "c_fix_2", type: "fix", title: "Class Seçicisi",
        text: ".kutu sınıfını seçmek istiyorum ama ID gibi seçmişim.",
        code: "#kutu { width: 100px; }",
        correct: ".kutu { width: 100px; }",
        hint1: "Diyez (#) işareti ID seçer.", hint2: "Nokta (.) işareti Class seçer."
    },
    {
        id: "c_fix_3", type: "fix", title: "Yazı Boyutu",
        text: "Yazıyı büyütmek istiyorum ama özellik adı yanlış.",
        code: "p { text-size: 20px; }",
        correct: "p { font-size: 20px; }",
        hint1: "Yazı boyutu 'font' ile başlar.", hint2: "font-size kullan."
    },
    {
        id: "c_fix_4", type: "fix", title: "Noktalı Virgül",
        text: "İkinci kural çalışmıyor çünkü bir hata var.",
        code: "h1 { color: blue \n font-weight: bold; }",
        correct: "h1 { color: blue; font-weight: bold; }",
        hint1: "Her CSS kuralının sonuna ne konur?", hint2: "Noktalı virgül (;) eksik."
    },

    // --- PART 2: FILL ---
    {
        id: "c_fill_1", type: "fill", title: "Yazı Rengi",
        text: "Yazı rengini değiştiren özelliği yaz.",
        code: "p { {{input}}: blue; }",
        answers: ["color"],
        hint1: "Renk İngilizce'de ne demek?", hint2: "color."
    },
    {
        id: "c_fill_2", type: "fill", title: "Kenar Boşluğu",
        text: "Dış boşluk (margin) vermek için özelliği tamamla.",
        code: "div { {{input}}: 10px; }",
        answers: ["margin"],
        hint1: "Dış sınır/kenar boşluğu.", hint2: "margin."
    },
    {
        id: "c_fill_3", type: "fill", title: "İç Boşluk",
        text: "İç boşluk (padding) vermek için özelliği tamamla.",
        code: "div { {{input}}: 20px; }",
        answers: ["padding"],
        hint1: "Dolgu/tampon bölgesi.", hint2: "padding."
    },
    {
        id: "c_fill_4", type: "fill", title: "Flexbox",
        text: "Elemanları yan yana dizmek için display modunu ayarla.",
        code: ".container { display: {{input}}; }",
        answers: ["flex"],
        hint1: "Esnek kutu modeli.", hint2: "flex."
    },

    // --- PART 3: SORT ---
    {
        id: "c_sort_1", type: "sort", title: "Box Model",
        text: "Kutu modelinin en içten en dışa sıralaması nasıldır?",
        lines: [
            { id: "1", text: "Content (İçerik)" },
            { id: "2", text: "Padding (İç Boşluk)" },
            { id: "3", text: "Border (Kenarlık)" },
            { id: "4", text: "Margin (Dış Boşluk)" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "İçerik en ortadadır.", hint2: "Margin en dıştadır."
    },
    {
        id: "c_sort_2", type: "sort", title: "CSS Yapısı",
        text: "Bir CSS kural setini doğru oluştur.",
        lines: [
            { id: "1", text: "p {" },
            { id: "2", text: "color: red;" },
            { id: "3", text: "font-size: 16px;" },
            { id: "4", text: "}" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Seçici ve süslü parantez açılır.", hint2: "Özellikler içine yazılır."
    },
    {
        id: "c_fix_5", type: "fix", title: "Yorum Satırı Hatası",
        text: "Araya yorum ekledim ama kod bozuldu.",
        code: "/* Yorum // body { color: black; }",
        correct: "/* Yorum */ body { color: black; }",
        hint1: "CSS yorumları */ ile bitmelidir.", hint2: "Kapanış işaretini ekle."
    },
    {
        id: "c_fill_5", type: "fill", title: "Arkaplan Resmi",
        text: "Arkaplana resim eklemek için url fonksiyonunu kullan.",
        code: "body { background-image: {{input}}('bg.jpg'); }",
        answers: ["url"],
        hint1: "Adres belirtmek için kullanılır.", hint2: "url()."
    },
    {
        id: "c_sort_3", type: "sort", title: "Hover Efekti",
        text: "Mouse üzerine gelince rengi değiştirme kuralını kur.",
        lines: [
            { id: "1", text: "a:hover {" },
            { id: "2", text: "color: orange;" },
            { id: "3", text: "text-decoration: underline;" },
            { id: "4", text: "}" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: ":hover seçicisi en başta.", hint2: "Süslü parantezleri unutma."
    },
    {
        id: "c_fix_6", type: "fix", title: "Piksel Birimi",
        text: "Boyut verirken birimi unuttum.",
        code: "div { width: 50; }",
        correct: "div { width: 50px; }",
        hint1: "CSS'de birimsiz sayı (0 hariç) geçersizdir.", hint2: "px ekle."
    },
    {
        id: "c_fill_6", type: "fill", title: "Ortalama",
        text: "Metni ortalamak için hangi değeri kullanırsın?",
        code: "h1 { text-align: {{input}}; }",
        answers: ["center"],
        hint1: "Orta/Merkez anlamında.", hint2: "center."
    },
    {
        id: "c_sort_4", type: "sort", title: "Medya Sorgusu",
        text: "Mobil uyumluluk için medya sorgusu yapısı.",
        lines: [
            { id: "1", text: "@media (max-width: 600px) {" },
            { id: "2", text: "body {" },
            { id: "3", text: "background: blue;" },
            { id: "4", text: "}" },
            { id: "5", text: "}" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "@media dıştaki kapsayıcıdır.", hint2: "İçine normal CSS kuralları gelir."
    }
];

// ================= JS FINAL EXAM (20 QUESTIONS) =================
lessonData.javascriptExam = [
    // --- PART 1: FIX ---
    {
        id: "j_fix_1", type: "fix", title: "Değişken Tanımı",
        text: "Değişken tanımlarken hata yaptım.",
        code: "variable x = 10;",
        correct: "var x = 10;",
        hint1: "'variable' diye bir anahtar kelime yok.", hint2: "var, let veya const kullan."
    },
    {
        id: "j_fix_2", type: "fix", title: "Ekrana Yazdırma",
        text: "Konsola yazı yazdırmak istiyorum.",
        code: "print('Merhaba');",
        correct: "console.log('Merhaba');",
        hint1: "JS'de print() sayfayı yazdırır.", hint2: "console.log() kullan."
    },
    {
        id: "j_fix_3", type: "fix", title: "Fonksiyon Hatası",
        text: "Fonksiyon tanımlarken parantezleri karıştırdım.",
        code: "function topla{a, b} { return a + b; }",
        correct: "function topla(a, b) { return a + b; }",
        hint1: "Parametreler süslü değil, normal parantez içine yazılır.", hint2: "() kullan."
    },
    {
        id: "j_fix_4", type: "fix", title: "Eşitlik Kontrolü",
        text: "If bloğu çalışmıyor, atama yapmışım.",
        code: "if (x = 5) { alert('Eşit'); }",
        correct: "if (x == 5) { alert('Eşit'); }",
        hint1: "Tek eşittir atama yapar.", hint2: "Çift (==) veya üç (===) eşittir kullan."
    },

    // --- PART 2: FILL ---
    {
        id: "j_fill_1", type: "fill", title: "Uyarı Penceresi",
        text: "Kullanıcıya mesaj kutusu göstermek için fonksiyonu tamamla.",
        code: "{{input}}('Dikkat!');",
        answers: ["alert"],
        hint1: "Alarm / Uyarı anlamında.", hint2: "alert."
    },
    {
        id: "j_fill_2", type: "fill", title: "Dizi Uzunluğu",
        text: "Dizinin eleman sayısını bul.",
        code: "let sayi = liste.{{input}};",
        answers: ["length"],
        hint1: "Uzunluk kelimesinin İngilizcesi.", hint2: "length."
    },
    {
        id: "j_fill_3", type: "fill", title: "DOM Seçimi",
        text: "ID'si 'demo' olan elemanı seç.",
        code: "document.getElementById('{{input}}');",
        answers: ["demo"],
        hint1: "Parantez içine ID yazılır.", hint2: "demo."
    },
    {
        id: "j_fill_4", type: "fill", title: "Döngü",
        text: "10 kez dönecek bir for döngüsü kur.",
        code: "for (let i = 0; i < 10; i{{input}}) { ... }",
        answers: ["++"],
        hint1: "i'yi birer birer artırmalısın.", hint2: "++ operatörü."
    },

    // --- PART 3: SORT ---
    {
        id: "j_sort_1", type: "sort", title: "Değişken ve Çıktı",
        text: "Önce değişkeni tanımla, sonra ekrana yazdır.",
        lines: [
            { id: "1", text: "let mesaj = 'Merhaba';" },
            { id: "2", text: "console.log(mesaj);" }
        ],
        order: ["1", "2"],
        hint1: "Tanımlanmayan değişken kullanılamaz.", hint2: "Önce let."
    },
    {
        id: "j_sort_2", type: "sort", title: "Fonksiyon Çağırma",
        text: "Fonksiyonu tanımla ve sonra çağır.",
        lines: [
            { id: "1", text: "function selamla() {" },
            { id: "2", text: "alert('Selam');" },
            { id: "3", text: "}" },
            { id: "4", text: "selamla();" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Fonksiyon bloğu önce oluşturulmalı.", hint2: "Çağırma işlemi (call) en sonda."
    },
    {
        id: "j_fix_5", type: "fix", title: "Dizi Erişim",
        text: "Dizinin ilk elemanını almak istiyorum ama 1 yazdım.",
        code: "let arr = [10, 20]; console.log(arr[1]);",
        correct: "let arr = [10, 20]; console.log(arr[0]);",
        hint1: "Diziler 0'dan başlar.", hint2: "İlk eleman için indeks 0'dır."
    },
    {
        id: "j_fill_5", type: "fill", title: "Sabit Değişken",
        text: "Değiştirilemez bir sabit tanımla.",
        code: "{{input}} PI = 3.14;",
        answers: ["const"],
        hint1: "Constant (Sabit) kelimesinin kısaltması.", hint2: "const."
    },
    {
        id: "j_sort_3", type: "sort", title: "Olay Dinleyici",
        text: "Butona tıklanınca çalışacak kodu kur.",
        lines: [
            { id: "1", text: "let btn = document.querySelector('button');" },
            { id: "2", text: "btn.addEventListener('click', function() {" },
            { id: "3", text: "console.log('Tıklandı');" },
            { id: "4", text: "});" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Önce butonu seç.", hint2: "Sonra listener ekle."
    },
    {
        id: "j_fix_6", type: "fix", title: "Lower Case",
        text: "Yazıyı küçük harfe çevirmek istiyorum.",
        code: "text.toSmallCase();",
        correct: "text.toLowerCase();",
        hint1: "Small değil, Lower kullanılır.", hint2: "toLowerCase()."
    },
    {
        id: "j_fill_6", type: "fill", title: "Mantıksal VE",
        text: "Hem A hem B doğruysa çalışacak operatörü yaz.",
        code: "if (A {{input}} B) { ... }",
        answers: ["&&"],
        hint1: "Ampersand karakteri.", hint2: "&& operatörü."
    },
    {
        id: "j_sort_4", type: "sort", title: "If-Else Yapısı",
        text: "Koşul yapısını doğru kur.",
        lines: [
            { id: "1", text: "if (gece) {" },
            { id: "2", text: "uyu();" },
            { id: "3", text: "} else {" },
            { id: "4", text: "calis();" },
            { id: "5", text: "}" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "Önce if, sonra else.", hint2: "Blokları kapatmayı unutma."
    }
];

// ================= PYTHON LESSONS (10 MODULES) =================
lessonData.python = [
    {
        id: 301,
        title: "Python'a Giriş & Kurulum",
        theory: "<h3>🐍 Python Nedir?</h3><p>Python, okunabilirliği yüksek, öğrenmesi kolay ve çok güçlü bir programlama dilidir. Yapay zeka, veri bilimi, web geliştirme ve otomasyon gibi pek çok alanda kullanılır.</p><p>Python kodları derlenmeye ihtiyaç duymaz (yorumlanır), yani yazdığın gibi çalıştırabilirsin!</p>",
        tips: "Python'da süslü parantez {} yerine girintileme (indentation) kullanılır. Bu yüzden boşluklara dikkat etmelisin!",
        question: "Python'da ekrana yazı yazdırmak için hangi fonksiyon kullanılır?",
        options: ["echo()", "print()", "console.log()", "write()"],
        answer: 1
    },
    {
        id: 302,
        title: "Değişkenler ve Veri Tipleri",
        theory: "<h3>📦 Veri Saklama</h3><p>Python'da değişken tanımlarken tür belirtmene gerek yoktur. Python bunu otomatik anlar (Dynamic Typing).</p><pre><code class='language-python'>isim = 'Ahmet'  # String (Metin)\nyas = 25      # Integer (Tam Sayı)\nboy = 1.78    # Float (Ondalıklı)\nogrenci_mi = True # Boolean (Mantıksal)</code></pre>",
        tips: "Değişken isimleri sayı ile başlayamaz ve boşluk içeremez. (örn: `1sayi` yanlış, `sayi1` doğru).",
        question: "Aşağıdakilerden hangisi geçerli bir ondalıklı sayı (float) değişkenidir?",
        options: ["x = '3.14'", "x = 3,14", "x = 3.14", "x = 314"],
        answer: 2
    },
    {
        id: 303,
        title: "Matematiksel İşlemler",
        theory: "<h3>➕ Hesap Makinesi Gibi</h3><p>Python'da temel işlemler çok basittir:</p><ul><li>Toplama: `+`</li><li>Çıkarma: `-`</li><li>Çarpma: `*`</li><li>Bölme: `/`</li><li>Üs Alma: `**` (Örn: 2**3 = 8)</li><li>Mod (Kalan): `%`</li></ul>",
        tips: "Tam bölme işlemi için `//` kullanılır. (Örn: 7 // 2 = 3).",
        question: "3 üssü 2 işleminin Python karşılığı nedir?",
        options: ["3 ^ 2", "3 ** 2", "pow(3, 2)", "3 * 3"],
        answer: 1
    },
    {
        id: 304,
        title: "Kullanıcıdan Veri Alma (Input)",
        theory: "<h3>🎤 Senin Sıran</h3><p>Kullanıcıdan bilgi almak için `input()` fonksiyonu kullanılır. Alınan veri her zaman **metin (string)** türündedir.</p><pre><code class='language-python'>ad = input('Adın ne? ')\nprint('Merhaba ' + ad)</code></pre>",
        tips: "Sayısal işlem yapacaksan `int()` veya `float()` ile dönüştürmelisin: `yas = int(input('Yaşın?'))`",
        question: "Kullanıcıdan alınan sayıyı tam sayıya çevirmek için hangi fonksiyon kullanılır?",
        options: ["str()", "float()", "int()", "list()"],
        answer: 2
    },
    {
        id: 305,
        title: "Koşullar (If - Elif - Else)",
        theory: "<h3>🚦 Karar Yapıları</h3><p>Programın duruma göre farklı çalışmasını sağlar.</p><pre><code class='language-python'>puan = 85\nif puan >= 90:\n    print('Harika!')\nelif puan >= 70:\n    print('İyi')\nelse:\n    print('Çalışmalısın')</code></pre><p>Dikkat: İki nokta üst üste (`:`) ve girintilere dikkat!</p>",
        tips: "Eşitlik kontrolü için `==` kullanılır.",
        question: "Bir koşul bloğunu başlatmak için satır sonuna hangi işaret konur?",
        options: ["; (Noktalı Virgül)", ": (İki Nokta)", ", (Virgül)", ". (Nokta)"],
        answer: 1
    },
    {
        id: 306,
        title: "Listeler (Arrays)",
        theory: "<h3>📋 Çoklu Veri</h3><p>Birden fazla veriyi tek bir değişkende tutmak için listeler kullanılır. Köşeli parantez `[]` ile tanımlanır.</p><pre><code class='language-python'>meyveler = ['Elma', 'Armut', 'Muz']\nprint(meyveler[0]) # Elma\nmeyveler.append('Kiraz') # Ekleme</code></pre>",
        tips: "Python'da listeler 0'dan başlar (Zero-indexed).",
        question: "Listeye yeni eleman eklemek için hangi metod kullanılır?",
        options: ["add()", "push()", "insert()", "append()"],
        answer: 3
    },
    {
        id: 307,
        title: "Döngüler (For Loops)",
        theory: "<h3>🔄 Tekrarlayan İşler</h3><p>Bir işlemi belirli sayıda veya bir liste üzerinde tekrarlamak için `for` döngüsü kullanılır.</p><pre><code class='language-python'>for i in range(5):\n    print(i)\n# 0, 1, 2, 3, 4 yazar</code></pre>",
        tips: "`range(5)` fonksiyonu 0'dan başlar, 5'e kadar (5 hariç) sayar.",
        question: "range(3) fonksiyonu hangi sayıları üretir?",
        options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"],
        answer: 1
    },
    {
        id: 308,
        title: "Döngüler (While Loops)",
        theory: "<h3>⏳ Koşullu Döngü</h3><p>Bir koşul doğru olduğu sürece çalışmaya devam eden döngüdür.</p><pre><code class='language-python'>sayac = 0\nwhile sayac < 3:\n    print('Devam')\n    sayac += 1</code></pre>",
        tips: "Sonsuz döngüye girmemek için sayaç artırmayı unutma!",
        question: "Döngüyü aniden kırmak (durdurmak) için hangi komut kullanılır?",
        options: ["stop", "exit", "break", "continue"],
        answer: 2
    },
    {
        id: 309,
        title: "Fonksiyonlar (Functions)",
        theory: "<h3>🔨 Kod Fabrikası</h3><p>Tekrar tekrar kullanılacak kod bloklarını paketlemek için `def` kullanılır.</p><pre><code class='language-python'>def selamla(isim):\n    return 'Merhaba ' + isim\n\nprint(selamla('Ali'))</code></pre>",
        tips: "Fonksiyonlar `return` ile değer döndürür, `print` ile sadece ekrana yazar.",
        question: "Python'da fonksiyon tanımlamak için hangi anahtar kelime kullanılır?",
        options: ["function", "func", "def", "define"],
        answer: 2
    },
    {
        id: 310,
        title: "Sözlükler (Dictionaries)",
        theory: "<h3>📖 Anahtar - Değer</h3><p>Verileri anahtar-değer (key-value) çiftleri halinde saklamak için kullanılır. Süslü parantez `{}` kullanılır.</p><pre><code class='language-python'>ogrenci = {\n    'ad': 'Ayşe',\n    'not': 90\n}\nprint(ogrenci['ad'])</code></pre>",
        tips: "Sözlüklerde sıra garanti edilmez, anahtarlar üzerinden erişilir.",
        question: "Bir sözlükteki veriye nasıl erişilir?",
        options: ["index ile (list[0])", "anahtar ile (dict['key'])", "sıra no ile", "hiçbiri"],
        answer: 1
    }
];

// ================= PYTHON FINAL EXAM (20 QUESTIONS) =================
lessonData.pythonExam = [
    // --- PART 1: FIX ---
    {
        id: "p_fix_1", type: "fix", title: "Yazdırma Hatası",
        text: "Ekrana yazdırmak istiyorum ama hata veriyor.",
        code: "Print('Merhaba Dünya')",
        correct: "print('Merhaba Dünya')",
        hint1: "Python büyük/küçük harf duyarlıdır (Case Sensitive).", hint2: "Komutlar genelde küçük harfle başlar."
    },
    {
        id: "p_fix_2", type: "fix", title: "Değişken İsimlendirme",
        text: "Bu değişken tanımlaması neden hatalı?",
        code: "1sayi = 10",
        correct: "sayi1 = 10",
        hint1: "Değişken isimleri ne ile başlayamaz?", hint2: "Sayı ile başlayamaz."
    },
    {
        id: "p_fix_3", type: "fix", title: "If Bloğu",
        text: "Koşul bloğum çalışmıyor.",
        code: "if x > 5\n    print('Büyük')",
        correct: "if x > 5:\n    print('Büyük')",
        hint1: "Satır sonunda bir noktalama işareti eksik.", hint2: "İki nokta üst üste (:) koymalısın."
    },
    {
        id: "p_fix_4", type: "fix", title: "Liste İndeksi",
        text: "Listenin 3. elemanını (30) almak istiyorum.",
        code: "liste = [10, 20, 30]\nprint(liste(2))",
        correct: "liste = [10, 20, 30]\nprint(liste[2])",
        hint1: "Listelere erişirken hangi parantez kullanılır?", hint2: "Köşeli parantez [] kullan."
    },
    {
        id: "p_fix_5", type: "fix", title: "String Birleştirme",
        text: "Sayı ile metni birleştiremiyorum.",
        code: "yas = 20\nprint('Yaşım: ' + yas)",
        correct: "yas = 20\nprint('Yaşım: ' + str(yas))",
        hint1: "String ve Integer doğrudan toplanamaz.", hint2: "str() fonksiyonunu kullan."
    },
    {
        id: "p_fix_6", type: "fix", title: "For Döngüsü",
        text: "Döngü sözdizimi hatalı.",
        code: "for i in range(5) {\n    print(i)\n}",
        correct: "for i in range(5):\n    print(i)",
        hint1: "Python'da süslü parantez {} yoktur.", hint2: ": ve girintileme kullan."
    },

    // --- PART 2: FILL ---
    {
        id: "p_fill_1", type: "fill", title: "Kullanıcı Girişi",
        text: "Kullanıcıdan veri almak için fonksiyonu tamamla.",
        code: "ad = {{input}}('Adınız: ')",
        answers: ["input"],
        hint1: "Girdi almak.", hint2: "input()."
    },
    {
        id: "p_fill_2", type: "fill", title: "Uzunluk",
        text: "Listenin kaç elemanlı olduğunu bul.",
        code: "uzunluk = {{input}}(liste)",
        answers: ["len"],
        hint1: "Length kelimesinin kısaltması.", hint2: "len()."
    },
    {
        id: "p_fill_3", type: "fill", title: "Mod Alma",
        text: "10'un 3'e bölümünden kalanı bul.",
        code: "kalan = 10 {{input}} 3",
        answers: ["%"],
        hint1: "Yüzde işareti.", hint2: "% operatörü."
    },
    {
        id: "p_fill_4", type: "fill", title: "Büyük Harf",
        text: "Metni tamamen büyük harfe çevir.",
        code: "metin.{{input}}()",
        answers: ["upper"],
        hint1: "Yukarı/Üst anlamında.", hint2: "upper()."
    },
    {
        id: "p_fill_5", type: "fill", title: "Kütüphane Ekleme",
        text: "Random modülünü projeye dahil et.",
        code: "{{input}} random",
        answers: ["import"],
        hint1: "İthal etmek.", hint2: "import."
    },
    {
        id: "p_fill_6", type: "fill", title: "Tip Dönüşümü",
        text: "String '50'yi tam sayıya çevir.",
        code: "sayi = {{input}}('50')",
        answers: ["int"],
        hint1: "Integer kısaltması.", hint2: "int()."
    },
    {
        id: "p_fill_7", type: "fill", title: "Fonksiyon Tanımı",
        text: "Fonksiyon tanımlamak için eksik kelimeyi yaz.",
        code: "{{input}} topla(a, b):",
        answers: ["def"],
        hint1: "Define kısaltması.", hint2: "def."
    },

    // --- PART 3: SORT ---
    {
        id: "p_sort_1", type: "sort", title: "Değişken Takası",
        text: "İki değişkenin değerini üçüncü bir değişken kullanarak değiştir.",
        lines: [
            { id: "1", text: "temp = a" },
            { id: "2", text: "a = b" },
            { id: "3", text: "b = temp" }
        ],
        order: ["1", "2", "3"],
        hint1: "Önce a'yı yedekle.", hint2: "Sonra a'ya b'yi ata."
    },
    {
        id: "p_sort_2", type: "sort", title: "If-Else Yapısı",
        text: "Sayı pozitif mi negatif mi kontrol et.",
        lines: [
            { id: "1", text: "if sayi > 0:" },
            { id: "2", text: "    print('Pozitif')" },
            { id: "3", text: "else:" },
            { id: "4", text: "    print('Negatif')" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Önce if koşulu.", hint2: "Else en sonda."
    },
    {
        id: "p_sort_3", type: "sort", title: "While Döngüsü",
        text: "5'ten geriye sayan sayaç yap.",
        lines: [
            { id: "1", text: "i = 5" },
            { id: "2", text: "while i > 0:" },
            { id: "3", text: "    print(i)" },
            { id: "4", text: "    i -= 1" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Önce başlangıç değeri.", hint2: "Döngü içinde azaltma yapmazsan sonsuza girer."
    },
    {
        id: "p_sort_4", type: "sort", title: "Liste Metodu",
        text: "Listeyi sırala ve son elemanı sil.",
        lines: [
            { id: "1", text: "liste = [3, 1, 2]" },
            { id: "2", text: "liste.sort()" },
            { id: "3", text: "liste.pop()" },
            { id: "4", text: "print(liste)" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Önce tanımla, sonra sırala.", hint2: "Pop en son siler."
    },
    {
        id: "p_sort_5", type: "sort", title: "Fonksiyon",
        text: "Kare alan bir fonksiyon yaz ve kullan.",
        lines: [
            { id: "1", text: "def kare(x):" },
            { id: "2", text: "    return x * x" },
            { id: "3", text: "sonuc = kare(5)" },
            { id: "4", text: "print(sonuc)" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Önce tanım (def).", hint2: "Sonra kullanım."
    },
    {
        id: "p_fix_7", type: "fix", title: "Indentation Hatası",
        text: "Python'da boşluklar çok önemlidir. Bu kod neden çalışmıyor?",
        code: "def test():\nprint('Hata')",
        correct: "def test():\n    print('Hata')",
        hint1: "Fonksiyon içi içeride olmalı.", hint2: "Tab veya boşluk ile içeri al."
    },
    {
        id: "p_fill_8", type: "fill", title: "Boolean",
        text: "Doğru ve Yanlış değerlerini atayan anahtar kelimeler.",
        code: "x = {{input}}\ny = False",
        answers: ["True"],
        hint1: "Doğru.", hint2: "True (Baş harfi büyük)."
    }
];

// ================= REACT LESSONS (10 MODULES) =================
lessonData.react = [
    {
        id: 401,
        title: "React'a Giriş & JSX",
        theory: "<h3>⚛️ React Nedir?</h3><p>React, Facebook tarafından geliştirilen, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir.</p><p><strong>JSX (JavaScript XML)</strong>: HTML'e benzer bir sözdizimi ile JS içinde arayüz yazmamızı sağlar.</p>",
        tips: "JSX içinde JavaScript yazmak için süslü parantez `{}` kullanılır.",
        question: "React bileşenleri (component) ne döndürmelidir?",
        options: ["HTML String", "JSX Yapısı", "JSON Objesi", "CSS"],
        answer: 1
    },
    {
        id: 402,
        title: "Bileşenler (Components)",
        theory: "<h3>🧩 Yapı Taşları</h3><p>React uygulamaları bileşenlerden oluşur. Bileşenler, kendi mantığı ve görünümü olan bağımsız parçalardır.</p><pre><code class='language-javascript'>function Selam() {\n  return <h1>Merhaba!</h1>;\n}</code></pre>",
        tips: "Bileşen isimleri her zaman BÜYÜK harfle başlamalıdır (Örn: `Button` değil `button`).",
        question: "Bileşen isimlendirme kuralı hangisidir?",
        options: ["camelCase (myComponent)", "snake_case (my_component)", "PascalCase (MyComponent)", "kebab-case"],
        answer: 2
    },
    {
        id: 403,
        title: "Props (Veri Aktarımı)",
        theory: "<h3>🚚 Veri Taşıma</h3><p>Bir bileşenden diğerine veri aktarmak için `props` kullanılır. Props, bileşene parametre gibi gönderilir ve <strong>değiştirilemez (read-only)</strong>.</p><pre><code class='language-javascript'>function Karsila(props) {\n  return <h1>Selam, {props.ad}</h1>;\n}</code></pre>",
        tips: "Props, HTML öznitelikleri (attributes) gibi gönderilir: `<Karsila ad='Ali' />`",
        question: "Props değerini bileşen içinde değiştirebilir miyiz?",
        options: ["Evet, her zaman", "Hayır, salt okunurdur", "Sadece parent değiştirebilir", "Bazen"],
        answer: 1
    },
    {
        id: 404,
        title: "State (Durum Yönetimi)",
        theory: "<h3>🧠 Bileşen Hafızası</h3><p>Bir bileşenin zamanla değişen verilerini tutmak için `useState` hook'u kullanılır.</p><pre><code class='language-javascript'>const [sayi, setSayi] = useState(0);</code></pre><p>`setSayi` fonksiyonu çağrıldığında bileşen yeniden render olur.</p>",
        tips: "State'i doğrudan değiştirmeyin (`sayi = 5` yanlış), her zaman `set` fonksiyonunu kullanın.",
        question: "useState fonksiyonu ne döndürür?",
        options: ["Sadece değeri", "Sadece güncelleme fonksiyonunu", "Biri değer, biri fonksiyon olan 2'li dizi", "Obje"],
        answer: 2
    },
    {
        id: 405,
        title: "Olaylar (Events)",
        theory: "<h3>🖱️ Etkileşim</h3><p>React'ta olaylar camelCase ile yazılır: `onclick` yerine `onClick`.</p><pre><code class='language-javascript'><button onClick={tikla}>Tıkla</button></code></pre>",
        tips: "Fonksiyonu çağırarak değil (`tikla()`), ismini yazarak (`tikla`) verin.",
        question: "React'ta bir butona tıklama olayı nasıl tanımlanır?",
        options: ["onclick='...'", "v-on:click", "onClick={...}", "event-click"],
        answer: 2
    },
    {
        id: 406,
        title: "Koşullu Renderlama",
        theory: "<h3>🔀 Duruma Göre Gösterim</h3><p>Belli bir şarta göre arayüzü değiştirmek için if-else veya `? :` (ternary) operatörü kullanılır.</p><pre><code class='language-javascript'>{isLogin ? <Panel /> : <Login />}</code></pre>",
        tips: "Kısa devre yöntemi `&&` ile sadece 'varsa göster' yapabilirsiniz: `{hata && <Error />}`",
        question: "Ternary operatörü hangisidir?",
        options: ["if-else", "switch-case", "? :", "&&"],
        answer: 2
    },
    {
        id: 407,
        title: "Listeler ve Anahtarlar",
        theory: "<h3>📋 Liste Dönmek</h3><p>Dizileri ekrana basmak için `map()` fonksiyonu kullanılır. Her elemana benzersiz bir `key` (anahtar) verilmelidir.</p><pre><code class='language-javascript'>{isimler.map(isim => <li key={isim}>{isim}</li>)}</code></pre>",
        tips: "Key, React'ın hangi elemanın değiştiğini anlaması için kritiktir.",
        question: "Liste renderlarken 'key' özelliği neden gereklidir?",
        options: ["Stil vermek için", "Performans ve takip için", "Sıralama için", "Gerekli değildir"],
        answer: 1
    },
    {
        id: 408,
        title: "Formlar",
        theory: "<h3>📝 Kontrollü Bileşenler</h3><p>React'ta form elemanlarının değeri `state` ile kontrol edilir.</p><pre><code class='language-javascript'><input value={isim} onChange={e => setIsim(e.target.value)} /></code></pre>",
        tips: "Her `onChange` olayında state güncellenir, böylece React her an veriye hakim olur.",
        question: "Form elemanının değerini React state'ine bağlamaya ne denir?",
        options: ["Uncontrolled Component", "Redux", "Controlled Component", "Hook"],
        answer: 2
    },
    {
        id: 409,
        title: "Side Effects (useEffect)",
        theory: "<h3>⚡ Yan Etkiler</h3><p>Bileşen yüklendiğinde, güncellendiğinde veya silindiğinde bir işlem yapmak için `useEffect` kullanılır (API isteği, zamanlayıcı vb.).</p><pre><code class='language-javascript'>useEffect(() => { console.log('Yüklendi'); }, []);</code></pre>",
        tips: "Köşeli parantez `[]` bağımlılık dizisidir. Boşsa sadece ilk yüklemede çalışır.",
        question: "useEffect hook'u ne zaman çalışır?",
        options: ["Sadece hata olunca", "Sadece render öncesi", "Render sonrası (belirtilen durumlarda)", "Hiçbiri"],
        answer: 2
    },
    {
        id: 410,
        title: "Context API",
        theory: "<h3>🌐 Global Veri</h3><p>Props drilling (veriyi elden ele taşıma) sorununu çözmek için Context API kullanılır. Veriyi tepeden sağlar, alt bileşenler direkt erişir.</p>",
        tips: "`useContext` hook'u ile veriyi kolayca çekebilirsiniz.",
        question: "Context API ne için kullanılır?",
        options: ["Veritabanı bağlantısı", "Component stillendirme", "Bileşenler arası global veri paylaşımı", "Animasyon"],
        answer: 2
    }
];

// ================= REACT FINAL EXAM (20 QUESTIONS) =================
lessonData.reactExam = [
    // --- PART 1: FIX ---
    {
        id: "r_fix_1", type: "fix", title: "JSX Kuralı",
        text: "Div etiketini kapatmayı unuttum galiba.",
        code: "function App() {\n  return (\n    <div>Merhaba\n  )\n}",
        correct: "function App() {\n  return (\n    <div>Merhaba</div>\n  )\n}",
        hint1: "JSX'te açılan her etiket kapanmalıdır.", hint2: "</div> eksik."
    },
    {
        id: "r_fix_2", type: "fix", title: "Class vs ClassName",
        text: "CSS sınıfı ekledim ama React hata veriyor.",
        code: "<div class='container'>İçerik</div>",
        correct: "<div className='container'>İçerik</div>",
        hint1: "'class' JS'de rezerve bir kelimedir.", hint2: "React'ta 'className' kullanılır."
    },
    {
        id: "r_fix_3", type: "fix", title: "Hook Hatası",
        text: "State hook'unu yanlış tanımladım.",
        code: "const [sayac, sayac] = useState(0);",
        correct: "const [sayac, setSayac] = useState(0);",
        hint1: "İkinci eleman değişkeni değiştiren fonksiyondur.", hint2: "'set' öneki kullanılmalı."
    },
    {
        id: "r_fix_4", type: "fix", title: "Return Tek Kapsayıcı",
        text: "İki elementi yan yana döndürmeye çalışıyorum.",
        code: "return (\n  <h1>Başlık</h1>\n  <p>Metin</p>\n)",
        correct: "return (\n  <>\n    <h1>Başlık</h1>\n    <p>Metin</p>\n  </>\n)",
        hint1: "JSX tek bir parent (ebeveyn) element döndürmelidir.", hint2: "Fragment (<>...</>) veya <div> içine al."
    },
    {
        id: "r_fix_5", type: "fix", title: "Değişken Gösterimi",
        text: "Değişkeni ekrana basmak istiyorum.",
        code: "<h1>Merhaba isim</h1>",
        correct: "<h1>Merhaba {isim}</h1>",
        hint1: "Düz metin olarak 'isim' yazar.", hint2: "Değişkeni süslü parantez {} içine al."
    },
    {
        id: "r_fix_6", type: "fix", title: "Event Handler",
        text: "Butona basınca fonksiyonu çağırmak istiyorum.",
        code: "<button onClick={alert('Selam')}>Tıkla</button>",
        correct: "<button onClick={() => alert('Selam')}>Tıkla</button>",
        hint1: "Bu haliyle sayfa yüklenince direkt çalışır.", hint2: "Bir ok fonksiyonu (arrow func) içine al veya sadece ismini ver."
    },

    // --- PART 2: FILL ---
    {
        id: "r_fill_1", type: "fill", title: "State Hook",
        text: "React'tan useState hook'unu içe aktar.",
        code: "import { {{input}} } from 'react';",
        answers: ["useState"],
        hint1: "Durum yönetim kancası.", hint2: "useState."
    },
    {
        id: "r_fill_2", type: "fill", title: "Inline Style",
        text: "Rengi kırmızı yap.",
        code: "<div style={{ {{input}}: 'red' }}>Hata</div>",
        answers: ["color"],
        hint1: "Style bir objedir.", hint2: "color özelliği."
    },
    {
        id: "r_fill_3", type: "fill", title: "Effect Hook",
        text: "Yan etkiler için kullanılan hook.",
        code: "{{input}}(() => { ... }, []);",
        answers: ["useEffect"],
        hint1: "Efekt kancası.", hint2: "useEffect."
    },
    {
        id: "r_fill_4", type: "fill", title: "Props",
        text: "Parent bileşenden gelen veriyi al.",
        code: "function Kart({{input}}) { return <h1>{{{input}}.baslik}</h1>; }",
        answers: ["props"],
        hint1: "Özellikler (Properties) kısaltması.", hint2: "props."
    },
    {
        id: "r_fill_5", type: "fill", title: "Input Bağlama",
        text: "Input değerini state'e bağla.",
        code: "<input {{input}}={text} onChange={handleChange} />",
        answers: ["value"],
        hint1: "Değer özelliği.", hint2: "value."
    },
    {
        id: "r_fill_6", type: "fill", title: "Fragment",
        text: "Boş etiket (Fragment) oluştur.",
        code: "<{{input}}>...</{{input}}>",
        answers: ["none"], // Trick: actually <>...</> but input logic matches text. Let's ask for React.Fragment shorthand
        // Wait, input can't be empty for logic. Let's change the question.
        // Revised: "React'ı ana paketten import et"
        code: "import {{input}} from 'react';",
        answers: ["React"],
        hint1: "Kütüphanenin adı.", hint2: "React."
    },
    {
        id: "r_fill_7", type: "fill", title: "Render",
        text: "Bileşeni DOM'a çizdiren metod.",
        code: "root.{{input}}(<App />);",
        answers: ["render"],
        hint1: "Çizdirmek, işlemek.", hint2: "render."
    },

    // --- PART 3: SORT ---
    {
        id: "r_sort_1", type: "sort", title: "Bileşen Yapısı",
        text: "Basit bir bileşeni oluştur.",
        lines: [
            { id: "1", text: "function App() {" },
            { id: "2", text: "  return (" },
            { id: "3", text: "    <h1>Selam</h1>" },
            { id: "4", text: "  );" },
            { id: "5", text: "}" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "Fonksiyon başlar, return eder, kapanır.", hint2: "JSX return içinde olmalı."
    },
    {
        id: "r_sort_2", type: "sort", title: "State Kullanımı",
        text: "Sayacı artıran bir akış kur.",
        lines: [
            { id: "1", text: "const [count, setCount] = useState(0);" },
            { id: "2", text: "function artir() {" },
            { id: "3", text: "  setCount(count + 1);" },
            { id: "4", text: "}" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Önce state tanımlanır.", hint2: "Sonra fonksiyon."
    },
    {
        id: "r_sort_3", type: "sort", title: "Effect Sırası",
        text: "Component yüklendiğinde 'Merhaba' yaz.",
        lines: [
            { id: "1", text: "useEffect(() => {" },
            { id: "2", text: "  console.log('Merhaba');" },
            { id: "3", text: "}, []);" }
        ],
        order: ["1", "2", "3"],
        hint1: "useEffect fonksiyonu açılır.", hint2: "Bağımlılık dizisi [] sonda."
    },
    {
        id: "r_sort_4", type: "sort", title: "Map Listesi",
        text: "Listeyi dönerek eleman oluştur.",
        lines: [
            { id: "1", text: "<ul>" },
            { id: "2", text: "{items.map(item => (" },
            { id: "3", text: "  <li key={item.id}>{item.name}</li>" },
            { id: "4", text: "))}" },
            { id: "5", text: "</ul>" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "Ul dışta.", hint2: "Map süslü parantezle açılır."
    },
    {
        id: "r_sort_5", type: "sort", title: "Koşullu Render",
        text: "Giriş yapılmışsa Paneli, yoksa Logini göster.",
        lines: [
            { id: "1", text: "return (" },
            { id: "2", text: "  isLogin" },
            { id: "3", text: "    ? <Panel />" },
            { id: "4", text: "    : <Login />" },
            { id: "5", text: ");" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "Return parantezi.", hint2: "Soru işareti ve iki nokta."
    },
    {
        id: "r_fix_7", type: "fix", title: "Effect Bağımlılığı",
        text: "Sonsuz döngüye giren bir effect var.",
        code: "useEffect(() => {\n  setSayac(sayac + 1);\n});",
        correct: "useEffect(() => {\n  setSayac(sayac + 1);\n}, []);",
        hint1: "Bağımlılık dizisi (array) verilmezse her renderda çalışır.", hint2: "Sonuna [] ekle."
    },
    {
        id: "r_fill_8", type: "fill", title: "Custom Hook",
        text: "Özel hook'lar hangi kelime ile başlamalı?",
        code: "function {{input}}Form() { ... }",
        answers: ["use"],
        hint1: "Kullan anlamına gelir.", hint2: "use."
    }
];

// ================= GIT & GITHUB LESSONS (10 MODULES) =================
lessonData.git = [
    {
        id: 501,
        title: "Git Nedir? & Kurulum",
        theory: "<h3>🌲 Zaman Makinesi</h3><p>Git, yazdığımız kodların geçmişini tutan bir versiyon kontrol sistemidir. Hata yaparsan kolayca geri alabilirsin.</p><p><strong>GitHub</strong> ise bu projeleri bulutta sakladığımız ve paylaştığımız yerdir.</p>",
        tips: "Git kurulumunu kontrol etmek için terminale `git --version` yazabilirsin.",
        question: "Git ve GitHub aynı şey midir?",
        options: ["Evet, tamamen aynıdır", "Hayır, Git yazılım, GitHub hizmettir", "GitHub internetsiz çalışır", "Git sadece Mac içindir"],
        answer: 1
    },
    {
        id: 502,
        title: "İlk Ayarlar (Config)",
        theory: "<h3>🆔 Kimlik Kartı</h3><p>Git'in seni tanıması için adını ve mailini tanıtmalısın.</p><pre><code class='language-bash'>git config --global user.name 'Adin'\ngit config --global user.email 'mail@ornek.com'</code></pre>",
        tips: "Bu ayarları sadece bir kez yapman yeterlidir.",
        question: "Git kullanıcı adını ayarlamak için hangi komut kullanılır?",
        options: ["git set name", "git config user.name", "git init name", "git login"],
        answer: 1
    },
    {
        id: 503,
        title: "Proje Başlatma (Init)",
        theory: "<h3>🌱 Tohum Ekimi</h3><p>Bir klasörü Git projesine çevirmek için `init` komutu kullanılır. Bu, gizli bir `.git` klasörü oluşturur.</p><pre><code class='language-bash'>git init</code></pre>",
        tips: "Mevcut bir projeyi indirmek için `git clone` kullanılır.",
        question: "Yeni bir Git deposu (repository) oluşturma komutu nedir?",
        options: ["git start", "git new", "git init", "git create"],
        answer: 2
    },
    {
        id: 504,
        title: "Durum Kontrolü (Status)",
        theory: "<h3>👀 Ne Oldu?</h3><p>Hangi dosyaların değiştiğini, hangilerinin takibe alındığını görmek için `status` kullanılır.</p><pre><code class='language-bash'>git status</code></pre>",
        tips: "Sık sık `git status` yazarak kaybolmaktan kurtulabilirsin.",
        question: "Değişikliklerin durumunu gösteren komut hangisidir?",
        options: ["git check", "git info", "git log", "git status"],
        answer: 3
    },
    {
        id: 505,
        title: "Sahneye Alma (Add)",
        theory: "<h3>📦 Paketleme</h3><p>Değişiklikleri kaydetmeden önce 'sahneye' (staging area) alırız. Tıpkı kargolamadan önce kutuya koymak gibi.</p><pre><code class='language-bash'>git add dosya.txt  # Tek dosya\ngit add .          # Her şeyi ekle</code></pre>",
        tips: "Yanlış dosyayı eklediysen `git reset` ile geri çıkarabilirsin.",
        question: "Tüm değişiklikleri sahneye (stage) ekleyen komut nedir?",
        options: ["git add all", "git add .", "git stage *", "git push"],
        answer: 1
    },
    {
        id: 506,
        title: "Kaydetme (Commit)",
        theory: "<h3>📸 Fotoğraf Çek</h3><p>Sahnedeki değişiklikleri kalıcı olarak kaydetmek için `commit` atarız. Her commit'in bir mesajı olmalıdır.</p><pre><code class='language-bash'>git commit -m 'İlk özellik eklendi'</code></pre>",
        tips: "Commit mesajları net ve açıklayıcı olmalıdır ('bug fixed' yerine 'Giriş hatası düzeltildi' gibi).",
        question: "-m parametresi ne işe yarar?",
        options: ["Mesaj ekler", "Master'a geçer", "Merge yapar", "Modifiye eder"],
        answer: 0
    },
    {
        id: 507,
        title: "Geçmiş (Log)",
        theory: "<h3>📜 Tarihçe</h3><p>Daha önce yapılan tüm commitleri görmek için `log` komutu kullanılır.</p><pre><code class='language-bash'>git log\ngit log --oneline  # Özet görünümü</code></pre>",
        tips: "Log ekranından çıkmak için `q` tuşuna bas.",
        question: "Commit geçmişini listelemek için hangisi kullanılır?",
        options: ["git history", "git past", "git log", "git show"],
        answer: 2
    },
    {
        id: 508,
        title: "Dallar (Branches)",
        theory: "<h3>🌿 Paralel Evren</h3><p>Ana projeyi bozmadan yeni özellikler denemek için dallar (branches) kullanılır.</p><pre><code class='language-bash'>git branch yeni-ozellik  # Oluştur\ngit checkout yeni-ozellik  # Geçiş Yap</code></pre>",
        tips: "Kısa yol: `git checkout -b yeni-dal` hem oluşturur hem geçer.",
        question: "Mevcut dalları listelemek için hangi komut verilir?",
        options: ["git branch", "git list", "git branches", "git show"],
        answer: 0
    },
    {
        id: 509,
        title: "Birleştirme (Merge)",
        theory: "<h3>🔗 Birleşme</h3><p>Farklı bir daldaki çalışmayı ana dala (main/master) dahil etmek için kullanılır.</p><pre><code class='language-bash'>git checkout main\ngit merge yeni-ozellik</code></pre>",
        tips: "Önce birleştirmek istediğin 'hedef' dala geçmelisin.",
        question: "Bir dalı mevcut dala entegre eden komut nedir?",
        options: ["git join", "git combine", "git merge", "git mix"],
        answer: 2
    },
    {
        id: 510,
        title: "Uzak Sunucu (Remote)",
        theory: "<h3>☁️ Buluta Gönder</h3><p>Kodları GitHub'a göndermek (push) veya oradan çekmek (pull) için kullanılır.</p><pre><code class='language-bash'>git push origin main  # Gönder\ngit pull origin main  # Çek</code></pre>",
        tips: "Origin, genelde GitHub deposunun takma adıdır.",
        question: "Yerel commitleri GitHub'a yükleyen komut nedir?",
        options: ["git upload", "git send", "git push", "git commit"],
        answer: 2
    }
];

// ================= GIT FINAL EXAM (20 QUESTIONS) =================
lessonData.gitExam = [
    // --- PART 1: FIX ---
    {
        id: "g_fix_1", type: "fix", title: "Commit Mesajı",
        text: "Mesaj parametresini yanlış yazdım.",
        code: "git commit -message 'Hata düzeltildi'",
        correct: "git commit -m 'Hata düzeltildi'",
        hint1: "Parametre tek harflidir.", hint2: "-m kullan.",
        editorLanguage: "bash" // Custom hint for highlighter if needed, default html/js
    },
    {
        id: "g_fix_2", type: "fix", title: "Add Komutu",
        text: "Tüm dosyaları eklemek istiyorum ama komut hatalı.",
        code: "git add all",
        correct: "git add .",
        hint1: "Nokta (.) tüm klasörü temsil eder.", hint2: "'all' diye bir parametre genelde kullanılmaz.",
        editorLanguage: "bash"
    },
    {
        id: "g_fix_3", type: "fix", title: "Branch Değiştirme",
        text: "Dala geçmek için 'move' yazdım.",
        code: "git move main",
        correct: "git checkout main",
        hint1: "Otellerden çıkış yapar gibi düşün.", hint2: "checkout komutu.",
        editorLanguage: "bash"
    },
    {
        id: "g_fix_4", type: "fix", title: "Remote Ekleme",
        text: "GitHub adresini eklerken hata yaptım.",
        code: "git remote add https://github.com/test.git",
        correct: "git remote add origin https://github.com/test.git",
        hint1: "Uzak sunucuya bir isim (takma ad) vermelisin.", hint2: "Genelde 'origin' kullanılır.",
        editorLanguage: "bash"
    },
    {
        id: "g_fix_5", type: "fix", title: "Push Hatası",
        text: "Kodu göndermek için 'put' dedim.",
        code: "git put origin main",
        correct: "git push origin main",
        hint1: "İtmek anlamına gelen kelime.", hint2: "push.",
        editorLanguage: "bash"
    },
    {
        id: "g_fix_6", type: "fix", title: "Global Ayar",
        text: "Kullanıcı adımı ayarlarken tireleri unuttum.",
        code: "git config global user.name 'Ali'",
        correct: "git config --global user.name 'Ali'",
        hint1: "Parametreler genelde çift tire (--) ile başlar.", hint2: "--global.",
        editorLanguage: "bash"
    },

    // --- PART 2: FILL ---
    {
        id: "g_fill_1", type: "fill", title: "Başlatma",
        text: "Projeyi Git'e tanıt.",
        code: "git {{input}}",
        answers: ["init"],
        hint1: "Initialize kısaltması.", hint2: "init.",
        editorLanguage: "bash"
    },
    {
        id: "g_fill_2", type: "fill", title: "Klonlama",
        text: "GitHub'dan proje indir.",
        code: "git {{input}} https://github.com/...",
        answers: ["clone"],
        hint1: "Kopya oluşturmak.", hint2: "clone.",
        editorLanguage: "bash"
    },
    {
        id: "g_fill_3", type: "fill", title: "Durum",
        text: "Değişiklikleri kontrol et.",
        code: "git {{input}}",
        answers: ["status"],
        hint1: "Durum raporu.", hint2: "status.",
        editorLanguage: "bash"
    },
    {
        id: "g_fill_4", type: "fill", title: "Geri Alma",
        text: "Yapılan değişikliği (commit öncesi) geri al.",
        code: "git {{input}} dosya.txt",
        answers: ["restore"], // Or checkout, but restore is modern. Let's accept checkout too if logic allowed multiple correct.
        // For simplicity stick to checkout or restore. 'checkout' is taught widely. 
        // Let's use 'restore' as it is more semantic in newer git, but 'checkout' is classic. 
        // Based on lessons: "git reset" was mentioned for unstage. For unmodifying file...
        // Let's use 'checkout' as it's common. Or change q.
        // Q: "Add ile eklenen dosyayı sahneden (stage) çıkar" -> git reset
        answers: ["reset"],
        hint1: "Sıfırlamak.", hint2: "reset."
    },
    {
        id: "g_fill_5", type: "fill", title: "Dal Oluşturma",
        text: "Yeni bir dal yarat.",
        code: "git {{input}} yeni-dal",
        answers: ["branch"],
        hint1: "Şube/Dal.", hint2: "branch."
    },
    {
        id: "g_fill_6", type: "fill", title: "Çekme",
        text: "Güncellemeleri al.",
        code: "git {{input}} origin main",
        answers: ["pull"],
        hint1: "Kendine çekmek.", hint2: "pull."
    },
    {
        id: "g_fill_7", type: "fill", title: "Gizleme",
        text: "Bazı dosyaları Git'in görmezden gelmesi için kullanılan dosya adı.",
        code: ".{{input}}",
        answers: ["gitignore"],
        hint1: "Git ve Ignore kelimeleri.", hint2: "gitignore."
    },

    // --- PART 3: SORT ---
    {
        id: "g_sort_1", type: "sort", title: "Git Akışı",
        text: "Bir değişikliği kaydetme sırası.",
        lines: [
            { id: "1", text: "Dosyayı Düzenle" },
            { id: "2", text: "git add ." },
            { id: "3", text: "git commit -m 'Mesaj'" },
            { id: "4", text: "git push" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Önce işi yap.", hint2: "Sonra sahnele, taahhüt et, gönder."
    },
    {
        id: "g_sort_2", type: "sort", title: "Yeni Özellik",
        text: "Yeni bir özellik ekleme süreci.",
        lines: [
            { id: "1", text: "git checkout -b feature-kyc" },
            { id: "2", text: "Kodları Yaz" },
            { id: "3", text: "git commit -m 'KYC eklendi'" },
            { id: "4", text: "git checkout main" },
            { id: "5", text: "git merge feature-kyc" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "Dal aç, çalış, kaydet.", hint2: "Ana dala dön ve birleştir."
    },
    {
        id: "g_sort_3", type: "sort", title: "Projeyi Sıfırdan Yüklemek",
        text: "Bilgisayarındaki projeyi GitHub'a yükle.",
        lines: [
            { id: "1", text: "git init" },
            { id: "2", text: "git add ." },
            { id: "3", text: "git commit" },
            { id: "4", text: "git remote add origin URL" },
            { id: "5", text: "git push -u origin main" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "Git yoksa init ile başla.", hint2: "Remote eklemeden gönderemezsin."
    },
    {
        id: "g_sort_4", type: "sort", title: "Çakışma (Conflict)",
        text: "Merge sırasında çakışma çıkarsa ne yapılır?",
        lines: [
            { id: "1", text: "git merge dal" },
            { id: "2", text: "CONFLICT uyarısı alındı" },
            { id: "3", text: "Dosyayı aç ve manuel düzelt" },
            { id: "4", text: "git add ." },
            { id: "5", text: "git commit" }
        ],
        order: ["1", "2", "3", "4", "5"],
        hint1: "Önce hata çıkar.", hint2: "Düzeltip tekrar commit atarsın."
    },
    {
        id: "g_fix_7", type: "fix", title: "Log Parametresi",
        text: "Logları tek satırda görmek istiyorum.",
        code: "git log one-line",
        correct: "git log --oneline",
        hint1: "Parametre başında çift tire var.", hint2: "oneline bitişik yazılır.",
        editorLanguage: "bash"
    },
    {
        id: "g_fill_8", type: "fill", title: "Versiyon",
        text: "Yüklü Git sürümünü öğren.",
        code: "git --{{input}}",
        answers: ["version"],
        hint1: "Versiyon.", hint2: "version."
    }
];

// ================= 5. SINIF (BİLİŞİM) =================
lessonData.five = [
    {
        id: 1,
        title: "1. Hafta: Problemler ve Çözüm",
        theory: `
            <h3>🤔 Problem Nedir?</h3>
            <p>Günlük hayatımızda karşılaştığımız, çözüm aranması gereken ve çözümü için bilgi, mantık, deneyim ya da dikkat isteyen durumlara <strong>Problem</strong> denir.</p>
            <p>Örnek: "Sabah uyandınız, okula gideceksiniz ama elektrikler kesik ve kıyafetinizi bulamıyorsunuz." Bu bir problemdir.</p>
            
            <h3>🧩 Problem Çözme Adımları</h3>
            <ol>
                <li><strong>Problemi Anlama:</strong> Sorun tam olarak ne? Ne biliyoruz?</li>
                <li><strong>Plan Yapma:</strong> Nasıl çözebilirim? Stratejim ne olacak?</li>
                <li><strong>Planı Uygulama:</strong> Çözüm yolunu dene.</li>
                <li><strong>Değerlendirme:</strong> Çözüm işe yaradı mı? Daha iyi bir yol var mı?</li>
            </ol>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Problem sizce nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Günlük hayatta işlerin yolunda gitmemesi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Çözüm aranması gereken, bilgi ve mantık isteyen durumlara problem denir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Günlük hayatta karşılaştığınız bir problem örneği verin.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Okula giderken başınıza gelebilecek aksilikleri düşünün.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Örneğin: "Servisi kaçırmak", "Kalemimin ucunun kırılması", "Elektriklerin kesilmesi".</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Problem çözme adımları nelerdir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">4 adımlı bir süreçten bahsetmiştik.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">1. Problemi Anlama, 2. Plan Yapma, 3. Planı Uygulama, 4. Değerlendirme.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Bir plan yaparken nelere dikkat etmeliyiz?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Elindeki malzemeler ve zaman.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Elimizdeki kaynaklara (bilgi, zaman, malzeme) ve adım adım stratejiye dikkat etmeliyiz.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Çözümü değerlendirmek neden önemlidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hata yapmış olabilir misin?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Çözümün işe yarayıp yaramadığını görmek ve bir dahaki sefere daha iyi bir yol bulmak için önemlidir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Problemi anlamadan çözüme başlamak, yanlış yola girmene sebep olabilir!",
        question: "Bir problemi doğru çözebilmenin İLK aşaması hangisidir?",
        options: ["Plan Yapma", "Problemi Anlama", "Planı Uygulama", "Değerlendirme"],
        answer: 1,
        points: 50
    },
    {
        id: 2,
        title: "2. Hafta: Stratejiler (Kurt-Kuzu-Ot)",
        theory: `
            <h3>🐺 Kurt, Kuzu, Ot Problemi</h3>
            <p>Bir çiftçi; kurt, kuzu ve otu nehrin karşı tarafına geçirmelidir. Kayık sadece çiftçi ve bir şeyi alabilir. Kurt kuzuyu, kuzu otu yer. Nasıl çözersiniz?</p>
            
            <h3>🛠️ Problem Çözme Stratejileri</h3>
            <ol>
                <li><strong>Deneme-Yanılma:</strong> Farklı yolları test etme.</li>
                <li><strong>Parçalara Ayırma:</strong> Büyük sorunu küçük parçalara bölme.</li>
                <li><strong>Sondan Başa Gitme:</strong> Sonuçtan başlayarak geriye doğru düşünme.</li>
                <li><strong>Beyin Fırtınası:</strong> Aklına gelen her fikri değerlendirme.</li>
            </ol>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Kurt-Kuzu-Ot probleminin temel kısıtı (kuralı) nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Kim kimi yiyor?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kurt ile Kuzu, Kuzu ile Ot yalnız kalamaz.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Deneme-yanılma stratejisi nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Yap-Boz parçalarını nasıl yerleştirirsin?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Olası çözümleri sırasıyla deneyip, çalışmayanı eleyerek doğruyu bulma yöntemidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Problemi parçalara ayırmak ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Büyük bir pizzayı nasıl yersin?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Büyük ve karmaşık problemleri daha küçük, yönetilebilir parçalara bölerek çözmeyi kolaylaştırır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Görselleştirme problem çözümüne nasıl katkı sağlar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Bir evi tarif etmek mi kolay, çizmek mi?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Problemi kağıda çizmek veya şemalaştırmak, zihnimizde canlandırmamızı ve detayları görmemizi sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Çözülemeyen "Milenyum Problemleri" ne demektir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">100 yıldır çözülemeyen sorular.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Matematik dünyasında uzun yıllardır çözülememiş ve çözümü için büyük ödüller konulmuş çok zor problemlerdir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Karmaşık problemleri çözerken kağıt-kalem kullanarak çizim yapmak (görselleştirmek) çok işe yarar.",
        question: "Büyük ve karmaşık bir problemi daha kolay yönetilebilir hale getirmek için hangi strateji uygulanır?",
        options: ["Tahmin Etme", "Parçalara Ayırma", "Erteleme", "Unutma"],
        answer: 1,
        points: 50
    },
    {
        id: 3,
        title: "3. Hafta: Balık Kılçığı Yöntemi",
        theory: `
            <h3>🐟 Balık Kılçığı Diyagramı</h3>
            <p>Bir problemin nedenlerini ve sonuçlarını analiz etmek için kullanılır. Şekli balık kılçığına benzer.</p>
            <ul>
                <li><strong>Baş Kısmı:</strong> Temel Problem yazılır.</li>
                <li><strong>Kılçıklar:</strong> Problemi doğuran nedenler yazılır.</li>
            </ul>
            <p><strong>Örnek Problem:</strong> Sular Kirleniyor. <br> <strong>Nedenler:</strong> Fabrika atıkları, Bilinçsiz çöp atımı...</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Balık kılçığı yöntemi ne amaçla kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Neden ve Sonuç.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bir problemin kök nedenlerini ve sonuçlarını analiz etmek için kullanılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Balığın baş kısmına ne yazılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Diyagramın en sağındaki kısım.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Temel Problem yazılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Kılçıklar neyi temsil eder?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Problemi oluşturan parçalar.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Problemin nedenlerini (sebeplerini) temsil eder.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Suların kirlenmesinin ana nedenleri nelerdir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Fabrikalar ne yapar?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Fabrika atıkları, evsel atıklar, kimyasal ilaçlar vb.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Problemi analiz etmek neden önemlidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Doktor ilaç vermeden önce ne yapar?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Sorunun kaynağını (kök nedenini) doğru tespit edip kalıcı çözüm üretmek için önemlidir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Balık kılçığı yöntemi, problemin kök nedenini bulmanı sağlar.",
        question: "Balık kılçığı diyagramında balığın BAŞ kısmı neyi ifade eder?",
        options: ["Çözümü", "Nedenleri", "Problemi", "Sonuçları"],
        answer: 2,
        points: 50
    },
    {
        id: 4,
        title: "4. Hafta: Yönergeler ve Adres Tarifi",
        theory: `
            <h3>🗺️ Adım Adım Tarif</h3>
            <p>Bilgisayarlar zeki değildir, sadece verdiğiniz komutları uygularlar. Bu yüzden komutlar (yönergeler) <strong>açık, net ve sıralı</strong> olmalıdır.</p>
            <p><strong>Etkinlik:</strong> Bir arkadaşına "gözü kapalı kağıt katlama" tarifi ver. Eğer "sağ köşeyi katla" dersen herkes farklı anlayabilir. Ama "sağ üst köşeyi, sol alt köşeye değecek şekilde katla" dersen herkes doğru yapar.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Adres tarifi yaparken neden sıralı olmalıyız?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Önce "sağa dön" sonra "ilerle" dersen ne olur?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Sıra karışırsa hedef bulunamaz. Adımlar mantıklı bir sırada olmalıdır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Yönergelerin net olması neden önemlidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">"Biraz git" dersen ne kadar gidilir?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Herkesin (veya bilgisayarın) aynı şeyi anlaması ve doğru yapması için net olmalıdır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Bilgisayarlar hatalı bir komutu düzeltebilir mi?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Bilgisayarlar zeki midir?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hayır, bilgisayarlar sadece verilen komutu uygular. Hatalı komut verilirse hatalı işlem yapar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Algoritma ve yönerge arasındaki ilişki nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Yönerge tek bir adım, algoritma ise...</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Algoritma, bir işi başarmak için verilen yönergeler bütünüdür (sıralı adımlardır).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. "Dinle ve Çiz" oyununda iletişim neden zordur?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Görmeden tarif etmek.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Sözlü ifadeler kişiden kişiye farklı yorumlanabilir, bu yüzden netlik zorlaşır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Bilgisayara 'Tost yap' diyemezsin. 'Ekmeği al', 'Peyniri koy', 'Kapağı kapat' demelisin.",
        question: "Bilgisayara verilen komutlar nasıl olmalıdır?",
        options: ["Karmaşık ve uzun", "Açık, net ve sıralı", "Rasgele ve hızlı", "Gizli ve şifreli"],
        answer: 1,
        points: 50
    },
    {
        id: 5,
        title: "5. Hafta: Veri, Sabit ve Değişken",
        theory: `
            <h3>💾 Veri Nedir?</h3>
            <p>Bilgisayarların işlediği, depoladığı ham bilgilere <strong>Veri (Data)</strong> denir. Örneğin boyunuz, yaşınız, saç renginiz birer veridir.</p>
            
            <h3>📌 Sabit ve Değişken</h3>
            <ul>
                <li><strong>Sabit:</strong> Değeri değişmeyen bilgiler. (Örn: Kek tarifindeki un, TC Kimlik No, Pi Sayısı).</li>
                <li><strong>Değişken:</strong> Duruma göre değeri değişebilen bilgiler. (Örn: Havanın sıcaklığı, Oyun skoru, Kekin içine konulan ekstra malzeme).</li>
            </ul>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Veri (Data) nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">İşlenmemiş bilgi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bilgisayarın işlediği, sakladığı ham gerçeklere (sayı, yazı, resim vb.) veri denir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Sabit ve Değişken arasındaki fark nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Kekin şekeri mi, fırın tepsisi mi?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Sabitlerin değeri değişmez, değişkenlerin değeri duruma göre değişir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Bilgisayar veriyi nasıl işler?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">0 ve 1.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bilgisayar veriyi ikili kod (0 ve 1) sistemine çevirerek işler.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Günlük hayattan bir sabit örnek verin.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Haftanın gün sayısı.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bir haftadaki gün sayısı (7), TC Kimlik Numaramız, Suyun kaynama noktası (100 derece).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Günlük hayattan bir değişken örnek verin.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hava durumu.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hava sıcaklığı, kumbaradaki para miktarı, yaşımız.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Skor tabelası bir değişkendir, çünkü maç boyunca sayı değişir. Kale direkleri ise sabittir.",
        question: "Bir bilgisayar oyununda sürekli artan 'Skor' neye örnektir?",
        options: ["Sabit", "Değişken", "Yönerge", "Donanım"],
        answer: 1,
        points: 50
    },
    {
        id: 6,
        title: "6. Hafta: Veri Toplama ve Analiz",
        theory: `
            <h3>📊 Veri Nasıl Toplanır?</h3>
            <p>Bilgi toplamak için <strong>Gözlem</strong>, <strong>Görüşme</strong> veya <strong>Anket</strong> yöntemleri kullanılır. Örneğin "Sınıftaki en sevilen meyve"yi bulmak için anket yaparız.</p>
            
            <h3>📈 Veri Analizi</h3>
            <p>Toplanan veriler tablolar ve grafiklere dökülerek yorumlanır. Bu sayede anlamlı sonuçlar çıkarılır.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Veri toplamak için hangi araçlar kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Gözlem, Soru...</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Anket, Gözlem, Görüşme (Mülakat), Kaynak Tarama.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Anket nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Çok kişiye soru sormak.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Belirli bir konuda insanların görüşlerini almak için hazırlanan soru listesidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Toplanan veriler nasıl görselleştirilir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Pasta dilimi, çubuklar.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Tablolar ve Grafikler (Sütun, Çizgi, Pasta grafiği) kullanılarak.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Veri analizi bize ne sağlar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Karar verme.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Karışık verilerden anlamlı sonuçlar çıkarmamızı ve doğru kararlar almamızı sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Bir oyunun sabitleri ve değişkenleri nelerdir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Saha boyutu vs Skor.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Sabitler: Oyun kuralları, saha boyutu. Değişkenler: Skor, Oyuncu canı, Süre.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Balık kılçığı yöntemi de problemin nedenlerini analiz etmek için bir araçtır.",
        question: "Bir konu hakkında insanların fikrini almak için yapılan soru sorma işlemine ne denir?",
        options: ["Deney", "Gözlem", "Anket", "Tahmin"],
        answer: 2,
        points: 50
    },
    {
        id: 7,
        title: "7. Hafta: Operatörler",
        theory: `
            <h3>➕ Matematiksel Operatörler</h3>
            <p>Toplama (+), Çıkarma (-), Çarpma (*), Bölme (/) işlemlerini yapan sembollerdir.</p>
            
            <h3>⚖️ Karşılaştırma ve Mantıksal Operatörler</h3>
            <ul>
                <li><strong>> (Büyüktür), < (Küçüktür), = (Eşittir)</strong></li>
                <li><strong>VE (AND):</strong> İki şartın da doğru olması gerekir. (Kırmızı VE Araba)</li>
                <li><strong>VEYA (OR):</strong> En az birinin doğru olması yeterlidir. (Çay VEYA Kahve)</li>
                <li><strong>DEĞİL (NOT):</strong> Durumun tersini alır.</li>
            </ul>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Bilgisayarda çarpma işlemi için hangi sembol kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Klavye üzerindeki yıldız.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Yıldız (*) sembolü kullanılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Mantıksal operatörler (VE, VEYA) ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Şartlar.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Birden fazla koşulu kontrol etmek veya karşılaştırmak için kullanılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. İşlem önceliği neden önemlidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">2 + 3 x 4 kaç eder?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Matematiksel işlemlerde doğru sonuca ulaşmak için çarpma/bölme gibi işlemlerin önce yapılması gerekir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. 5 > 3 ifadesinin sonucu nedir? (Doğru/Yanlış)</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">5, 3'ten büyük mü?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Doğru (True).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. "Sayı Tahmini" oyununda hangi operatörler kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Aşağı in, yukarı çık.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Büyüktür (>), Küçüktür (<) ve Eşittir (=) operatörleri.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "VE operatörü çok katıdır, her şeyin doğru olmasını ister. VEYA operatörü rahattır, bir tane doğru yet.",
        question: "Hem A hem de B şartının KESİNLİKLE sağlanması gerektiğini belirten mantıksal operatör hangisidir?",
        options: ["VEYA", "DEĞİL", "VE", "EŞİTTİR"],
        answer: 2,
        points: 50
    },
    {
        id: 8,
        title: "8. Hafta: Algoritma (Ağustos Böceği)",
        theory: `
            <h3>📜 Algoritma Nedir?</h3>
            <p>Bir problemi çözmek veya bir işi yapmak için tasarlanan <strong>adım adım</strong> yoldur. Algoritmanın başı ve sonu bellidir.</p>
            <p><strong>Örnek (Tost Yapma Algoritması):</strong></p>
            <ol>
                <li>Başla.</li>
                <li>Ekmeği ve malzemeleri al.</li>
                <li>Ekmeğin arasına peyniri koy.</li>
                <li>Makineye yerleştir ve pişir.</li>
                <li>Bitir.</li>
            </ol>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Algoritma kelimesi ne anlama gelir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Harezmi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bir sorunu çözmek için izlenen yol, yöntem anlamına gelir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Günlük bir işi (örn: diş fırçalama) algoritma olarak yazın.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Başla... Bitir.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">1. Başla, 2. Fırçayı al, 3. Macun sür, 4. Dişleri fırçala, 5. Ağzını çalkala, 6. Bitir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Adımların sırası karışırsa ne olur?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Macunu sürmeden fırçalarsan?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">İşlem başarısız olur veya hatalı sonuç verir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Algoritmada "Başla" ve "Bitir" adımları neden vardır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sınırlar.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">İşlemin nereden başlayıp nerede bittiğini bilgisayara (veya okuyana) belirtmek için.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. En kısa sürede en doğru sonuca ulaşmak ne kazandırır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Zaman ve Enerji.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Verimlilik sağlar, zaman ve enerji tasarrufu kazandırır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Algoritma sadece bilgisayarda değil, yemek tariflerinde bile vardır!",
        question: "Bir problemi adım adım çözme yoluna ne denir?",
        options: ["Donanım", "Yazılım", "Algoritma", "İnternet"],
        answer: 2,
        points: 50
    },
    {
        id: 9,
        title: "9. Hafta: Akış Şemaları - 1",
        theory: `
            <h3>🔀 Akış Şeması Nedir?</h3>
            <p>Algoritmaların şekillerle (sembollerle) gösterilmesidir.</p>
            
            <h3>Semboller ve Anlamları</h3>
            <ul>
                <li><strong>Elips:</strong> Başla ve Bitir.</li>
                <li><strong>Dikdörtgen:</strong> İşlem (Eylem).</li>
                <li><strong>Paralelkenar:</strong> Veri Girişi/Çıkışı.</li>
                <li><strong>Eşkenar Dörtgen (Baklava):</strong> Karar Verme (Eğer/Değilse).</li>
                <li><strong>Oklar:</strong> Akış yönünü gösterir.</li>
            </ul>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Akış şeması nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Algoritmanın resimli hali.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Algoritmanın geometrik şekiller ve oklarla gösterilmesidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Elips şekli hangi adımlarda kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">İlk ve son adım.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Başla ve Bitir adımlarında.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Eşkenar dörtgen (Karar) şekli ne zaman kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Soru sorduğumuzda.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bir karar verilmesi gerektiğinde (Eğer/Değilse durumlarında).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Oklar ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Yol tarifi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">İşlemlerin hangi sırayla yapılacağını (akış yönünü) gösterir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Dikdörtgen şekli hangi işlem için kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hesaplama.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hesaplama veya atama gibi eylem (işlem) adımlarında.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Eşkenar dörtgenin (Karar) her zaman en az iki çıkışı vardır: Evet ve Hayır.",
        question: "Akış şemasında 'Karar Verme' (Eğer sorusu) adımı için hangi geometrik şekil kullanılır?",
        options: ["Kare", "Elips", "Eşkenar Dörtgen", "Üçgen"],
        answer: 2,
        points: 50
    },
    {
        id: 10,
        title: "10. Hafta: Akış Şemaları - 2 (Uygulama)",
        theory: `
            <h3>🤖 Robotun Rotası</h3>
            <p>Bir robotu hedefe ulaştırmak için akış şeması çizdiğimizi düşünelim.</p>
            <p>Robot engelle karşılaşırsa ne yapacak? İşte burada <strong>Karar Yapısı</strong> devreye girer: "Önünde engel var mı? -> Evet ise Sağa Dön, Hayır ise İlerle".</p>
            <p>Tekrar eden işler için ise okları geriye doğru döndürerek <strong>Döngü</strong> oluştururuz.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Bir robotu A noktasından B noktasına götüren şemayı nasıl çizersin?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Adımları ve kararları düşün.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">İlerle, Dön ve Engel Var mı? kararlarını kullanarak çizerim.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Döngüsel işlemler akış şemasında nasıl gösterilir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Oklar nereye gider?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Okun, işlemin daha önceki bir adımına geri dönmesiyle gösterilir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. "Eğer yağmur yağıyorsa şemsiye al" ifadesini şemaya nasıl dökersin?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Karar kutusu.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Karar kutusuna "Yağmur yağıyor mu?" yazılır. Evet çıkışına "Şemsiye al", Hayır çıkışına "Şemsiye alma" bağlanır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. En kısa yol algoritması neden tercih edilir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Pil ömrü.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Daha az enerji ve zaman harcamak için tercih edilir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Akış şemasındaki hatalar nasıl bulunur?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Adım adım izle.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Masa başında adım adım (iz sürme) kontrol edilerek mantık hataları bulunur.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Robotun pilinin bitip bitmediğini bile akış şemasına ekleyebilirsin.",
        question: "Bir işlemi tekrar ettirmek için akış şemasında oklar nereye yönlendirilir?",
        options: ["Hep ileriye", "Geriye, tekrar edilecek adıma", "Şemanın sonuna", "Şemanın dışına"],
        answer: 1,
        points: 50
    },
    {
        id: 11,
        title: "11. Hafta: Algoritmik Düşünme (Tangram)",
        theory: `
            <h3>🧩 Algoritmik Düşünme</h3>
            <p>Bir problemi en verimli şekilde çözmek için zihnimizi eğitmemizdir. Tangram oyunu buna harika bir örnektir. Parçaları rastgele koymak yerine bir strateji ile yerleştirmek gerekir.</p>
            <p><strong>Yer Tutucu (Değişken):</strong> Hikayelerde veya kodlarda boş bırakılan ve sonradan doldurulan alanlardır. <br> Örn: "Sayın [İSİM], hoşgeldiniz."</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Algoritmik düşünmek bize ne kazandırır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Planlı olmak.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Problemleri daha hızlı, düzenli ve hatasız çözme becerisi kazandırır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Bir şekli tarif ederken nelere dikkat etmeliyiz?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Şekil, yön, boyut.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Şeklin özellikleri, konumu ve yönü net bir şekilde belirtilmelidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Karmaşık bir problemi nasıl basitleştiririz?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Parçala.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Problemi alt problemlere (parçalara) ayırarak basitleştiririz.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Yer tutucu (Değişken) ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Boşluk doldurma.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Değeri sonradan belli olacak bilgilerin yerini tutar (Örn: Davetiye üzerindeki isim kısmı).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Tangram oyununda sıra önemli midir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Üst üste gelme.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Evet, bazı durumlarda parçaları doğru sırayla yerleştirmek gerekebilir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Tangram oynarken önce büyük parçaları yerleştirmek işi kolaylaştırır.",
        question: "Kodlamada veya metinlerde 'Yer Tutucu' olarak adlandırılan kavram nedir?",
        options: ["Sabit", "Değişken", "Döngü", "Çıktı"],
        answer: 1,
        points: 50
    },
    {
        id: 12,
        title: "12. Hafta: Bilge Kunduz (Enformatik)",
        theory: `
            <h3>🦫 Bilge Kunduz Nedir?</h3>
            <p>Bilgisayar bilimini ve bilgi işlemsel düşünmeyi öğretmek için yapılan uluslararası bir etkinliktir.</p>
            <p>Enformatik (Bilişim), bilginin teknoloji ile işlenmesidir. Bilge Kunduz soruları, kod yazmadan algoritmik düşünme becerini geliştirir.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Bilge Kunduz etkinliği neyi amaçlar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Bilgisayar bilimi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Öğrencilere bilgi işlemsel düşünmeyi ve problem çözme becerilerini kazandırmayı amaçlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Enformatik (Bilişim) nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Bilgi + Teknoloji.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bilginin teknoloji kullanılarak toplanması, işlenmesi ve saklanması bilimidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Analitik düşünme neden önemlidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Parçaları birleştirmek.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Olayları neden-sonuç ilişkisi içinde inceleyip doğru sonuçlara varmak için gereklidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Neden-sonuç ilişkisi kurmak problem çözümünde nasıl kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Balık kılçığı.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Sorunun kaynağını bulup kalıcı çözüm üretmeyi sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Bilgisayarsız kodlama (Unplugged) nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Elektriksiz.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bilgisayar kullanmadan, kağıt-kalem veya oyunlarla kodlama mantığının öğrenilmesidir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Bilge Kunduz sorularını çözerken mantığını kullan, ezbere gerek yoktur.",
        question: "Bilge Kunduz etkinliği hangi yeteneği geliştirmeyi hedefler?",
        options: ["Hızlı klavye kullanma", "Bilgi İşlemsel Düşünme", "Oyun oynama", "Resim yapma"],
        answer: 1,
        points: 50
    },
    {
        id: 13,
        title: "13. Hafta: Programlama ve Blok Kodlama",
        theory: `
            <h3>💻 Programlama Nedir?</h3>
            <p>Bilgisayara ne yapması gerektiğini söyleyen komutları yazma işlemidir. Bunu yapan kişiye <strong>Programcı</strong> denir.</p>
            
            <h3>🧱 Blok Kodlama</h3>
            <p>Karmaşık kodları yazmak yerine, LEGO parçaları gibi blokları sürükleyip bırakarak kodlama yapmaktır. (Örn: Scratch, Blockly, mBlock).</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Programlama nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Bilgisayarla konuşmak.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bilgisayara belirli bir işi yaptırmak için verilen komutlar dizisidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Programlama dili ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Türkçe, İngilizce gibi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">İnsan ile bilgisayarın anlaşmasını sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Blok tabanlı kodlama ile metin tabanlı kodlama arasındaki fark nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Lego vs Kitap.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Blok kodlamada hazır bloklar sürüklenir, metin tabanlıda kodlar elle yazılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Programcı kime denir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Kodu yazan.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bilgisayar yazılımları geliştiren, kod yazan kişiye denir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Blok kodlama araçlarına örnek verin.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Kedi logolu site.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Scratch, Blockly, mBlock, Code.org.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Blok tabanlı kodlama, mantığı öğrenmek için harika bir başlangıçtır.",
        question: "Karmaşık kodları bloklar halinde sunan, sürükle-bırak yöntemiyle çalışan kodlama türü hangisidir?",
        options: ["Metin Tabanlı Kodlama", "Blok Tabanlı Kodlama", "İkili (Binary) Kodlama", "Makine Dili"],
        answer: 1,
        points: 50
    },
    {
        id: 14,
        title: "14. Hafta: Blockly - Labirent ve Döngüler",
        theory: `
            <h3>🔄 Labirentte Döngüler</h3>
            <p>Bir karakteri hedefe götürürken aynı işlemi (örneğin "İlerle") 5 defa yapmak yerine <strong>Döngü (Tekrarla)</strong> bloğunu kullanırız. Bu, kodumuzu kısaltır ve düzenler.</p>
            <p><strong>Karar:</strong> "Eğer yol varsa ilerle, yoksa dön" gibi bloklar akıllı hareket sağlar.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Labirent oyununda temel amaç nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hedef.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Karakteri engellere takılmadan hedefe ulaştırmaktır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. "Sola dön" bloğu karakteri nasıl etkiler?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hareket etmez, sadece...</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Karakterin olduğu yerde yüzünü sola çevirmesini sağlar, yerini değiştirmez.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Döngü bloğu ne zaman kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Tekrar.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bir veya birden fazla komutun sürekli tekrar edilmesi gerektiğinde kullanılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Kod satır sayısını azaltmak neden iyidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Okunabilirlik.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kodun daha okunaklı olmasını sağlar ve hata yapma riskini azaltır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. "İlerle" bloğunu 10 kez koymak yerine ne yapmalıyız?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Pembe blok.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"10 kez tekrarla" döngüsünün içine bir tane "İlerle" bloğu koymalıyız.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Döngü kullanmak programcının süper gücüdür!",
        question: "Bir komutu birçok kez tekrar etmek yerine hangi blok kullanılmalıdır?",
        options: ["Eğer Bloğu", "Döngü (Tekrarla) Bloğu", "Ses Bloğu", "Renk Bloğu"],
        answer: 1,
        points: 50
    },
    {
        id: 15,
        title: "15. Hafta: Blockly - Kuş ve Koşullar",
        theory: `
            <h3>🕊️ Kuş Yuvasına Nasıl Gider?</h3>
            <p>Bu oyunda <strong>Koşul (Eğer/Değilse)</strong> yapıları çok önemlidir. Örneğin:</p>
            <ul>
                <li><strong>Eğer</strong> solucan varsa -> Ye.</li>
                <li><strong>Değilse</strong> (Solucan yoksa) -> Yuvaya uç.</li>
            </ul>
            <p>Ayrıca <strong>Açı (Yön)</strong> kavramı ve matematikteki <strong>Büyüktür (>) / Küçüktür (<)</strong> sembolleri de kullanılır.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Açı (derece) yön belirlemede nasıl kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">90, 180, 270.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Karakterin hangi yöne bakacağını veya gideceğini belirlemek için kullanılır (Örn: 90 derece sağ, 270 derece sol).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Koşul yapısı (Eğer) hayatta nasıl karşımıza çıkar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hava soğuksa...</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"Eğer acıktıysan yemek ye", "Eğer ödevin bittiyse oyun oyna" gibi durumlarda.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. "Değilse" bloğu ne zaman çalışır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Şart tutmazsa.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"Eğer" bloğundaki koşul sağlanmadığında (yanlış olduğunda) çalışır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. x < 50 ifadesi ne anlama gelir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Küçüktür.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">x değerinin 50'den küçük olduğu durumu ifade eder.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Karmaşık koşullar (Ve/Veya) kuş oyununda nasıl kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hem solucan var hem engel yok.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Birden fazla şartın aynı anda kontrol edilmesi gerektiğinde (Worm < 50 Ve Heading > 90) kullanılır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Kuşun gagasının baktığı yön açıyı belirler (0 derece doğu, 90 derece kuzey vb.).",
        question: "Bir şartın sağlanmadığı (yanlış olduğu) durumda çalışacak kodlar hangi blok içine yazılır?",
        options: ["Eğer", "Tekrarla", "Değilse", "Yap"],
        answer: 2,
        points: 50
    },
    {
        id: 16,
        title: "16. Hafta: Blockly - Kaplumbağa (Çizim)",
        theory: `
            <h3>🐢 Kodla Çizim Yapmak</h3>
            <p>Kaplumbağa grafiklerinde, karakterimiz arkasında bir iz bırakarak ilerler.</p>
            <ul>
                <li><strong>Kalemi Bastır:</strong> Çizmeye başla.</li>
                <li><strong>Kalemi Kaldır:</strong> Çizmeden hareket et.</li>
                <li><strong>Renk Ayarla:</strong> Çizgi rengini değiştir.</li>
            </ul>
            <p>Kare çizmek için: "100 adım git, 90 derece dön" işlemini 4 kez tekarla.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Kaplumbağa ile kare çizmek için algoritma nasıldır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">İlerle ve Dön.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">4 kez tekrarla: [100 ileri git, 90 derece sağa dön].</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Kalemi kaldır komutu ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">İz bırakma.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kaplumbağanın hareket ederken arkasında çizgi çizmemesini sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. İç içe döngü kullanarak nasıl desen çizilir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Bir şekli tekrar tekrar çizmek.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bir şekli çizen döngüyü, başka bir döngünün içine koyarak ve açıyı değiştirerek desenler oluşturulur.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Bir daire çizmek için dönüş açısı ne olmalıdır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Toplam 360 derece.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Çok küçük açılarla (örn: 1 derece) çok sayıda tekrar (360 kez) yapılarak çizilir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Renk bloğunun görevi nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Kırmızı, Mavi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Çizilen çizginin rengini değiştirmeye yarar.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Kalemi kaldırdığında kaplumbağa hareket eder ama çizgi çizmez (Işınlanma gibi).",
        question: "Çizim yaparken kaplumbağayı iz bırakmadan hareket ettirmek için hangi komut kullanılır?",
        options: ["Silgi Kullan", "Kalemi Kaldır", "Geri Git", "Dur"],
        answer: 1,
        points: 50
    },
    {
        id: 17,
        title: "17. Hafta: Blockly - Film (Animasyon)",
        theory: `
            <h3>🎬 Animasyon ve Koordinatlar</h3>
            <p>Animasyon, resimlerin hızlıca değişmesiyle oluşur. Ekranda bir nesnenin yerini belirlemek için <strong>X (Yatay)</strong> ve <strong>Y (Dikey)</strong> koordinatlarını kullanırız.</p>
            <p><strong>Zaman (Time) Bloğu:</strong> 0'dan 100'e kadar sürekli artan bir sayaçtır. Nesneleri hareket ettirmek için kullanılır.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. X ve Y eksenleri neyi ifade eder?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Yatay ve Dikey.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">X ekseni yatay konumu (sağ-sol), Y ekseni dikey konumu (yukarı-aşağı) belirtir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Zaman (Time) bloğu ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sayaç.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">0'dan 100'e kadar sürekli artan bir değer vererek animasyonun ilerlemesini sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Bir nesneyi sağa doğru hareket ettirmek için hangi eksen değişmelidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Yatay.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">X ekseni (değeri artmalı).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Animasyonda renk değişimi nasıl yapılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Renk bloğuna zaman ekle.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Renk bloğunun içine zaman değişkeni veya matematiksel işlemler konularak sürekli değişmesi sağlanır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Matematik blokları hareketi nasıl etkiler?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hız.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Koordinat hesaplamalarında kullanılarak hareketin hızını, yönünü veya şeklini belirler.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "X yatay (sağ-sol), Y dikey (yukarı-aşağı) konumdur.",
        question: "Bir nesnenin zamanla yer değiştirmesini (hareket etmesini) sağlamak için hangi blok kullanılır?",
        options: ["Ses", "Zaman (Time)", "Metin", "Renk"],
        answer: 1,
        points: 50
    }
];

lessonData.six = [
    {
        id: 1,
        title: "1. Hafta: Bilgisayar Tarihi ve Veri",
        theory: `
            <h3>📜 Bilgisayarın Tarihçesi</h3>
            <p>Bilinen ilk bilgisayar <strong>Abaküs</strong>'tür. Matematiksel işlemleri kolaylaştırmak için icat edilmiştir.</p>
            <p>İlk modern bilgisayar <strong>ENIAC</strong>'tır. 30 ton ağırlığında ve bir ev büyüklüğündedir (167 m²).</p>
            <p><strong>Ada Lovelace</strong>, ilk bilgisayar programcısı olarak kabul edilir.</p>
            
            <h3>💾 Veri ve Bilgi</h3>
            <p><strong>Veri:</strong> İşlenmemiş ham gerçeklerdir. (Örn: "25", "Kırmızı")</p>
            <p><strong>Bilgi:</strong> Verinin işlenmiş ve anlamlı hale gelmiş halidir. (Örn: "Sınıf mevcudu 25 kişidir.")</p>
            
            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. İlk bilgisayar (Abaküs) ne amaçla kullanılmıştır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sayılarla ilgili.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Matematiksel işlemleri kolaylaştırmak için.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Ada Lovelace kimdir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">İlk...</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Tarihteki ilk bilgisayar programcısıdır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Veri ve Bilgi arasındaki fark nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">İşlenmiş vs İşlenmemiş.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Veri ham gerçeklerdir, bilgi ise verinin işlenmiş anlamlı halidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. ENIAC'ın fiziksel özellikleri nasıldı?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Ağırlık ve boyut.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">30 ton ağırlığında ve bir ev büyüklüğündeydi (167 m²).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Günlük hayattan bir veri örneği verin.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Ham bilgi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hava sıcaklığı değeri, öğrenci numarası veya bir rengin adı.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "ENIAC o kadar büyüktü ki, çalıştığında şehrin ışıkları zayıflardı!",
        question: "Bilinen ilk bilgisayar (hesaplayıcı) aşağıdakilerden hangisidir?",
        options: ["ENIAC", "Abaküs", "Tablet", "Hesap Makinesi"],
        answer: 1,
        points: 50
    },
    {
        id: 2,
        title: "2. Hafta: Sabit ve Değişkenler",
        theory: `
            <h3>🔒 Sabit Nedir?</h3>
            <p>Değeri değişmeyen ifadelerdir. Örneğin suyun kaynama noktası (100°C) veya bir haftadaki gün sayısı (7) sabittir.</p>
            
            <h3>📦 Değişken Nedir?</h3>
            <p>Değeri zamanla veya duruma göre değişebilen ifadelerdir. Örneğin hava sıcaklığı, bir maçtaki skor veya kumbaradaki para miktarı değişkendir.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Sabit ne demektir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Değişmeyen.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Değeri zamanla veya duruma göre değişmeyen ifadelerdir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Değişken ne demektir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Değişen.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Değeri duruma, zamana veya şartlara göre değişebilen ifadelerdir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. "Haftanın gün sayısı" sabit midir değişken midir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hep 7 midir?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Sabittir (Daima 7).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. "Kumbaradaki para" sabit midir değişken midir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Para ekleyince ne olur?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Değişkendir (Para ekleyip aldıkça değişir).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Sabit ve değişken arasındaki temel fark nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Değişim.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Sabitin değeri kalıcıdır, değişkenin değeri şartlara göre değişir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Sabitler çivi gibi çakılıdır, değişkenler kutu gibidir, içindekiler değişebilir.",
        question: "Aşağıdakilerden hangisi bir 'Sabit' örneğidir?",
        options: ["Hava Sıcaklığı", "Suyun Kaynama Noktası", "Maç Skoru", "Yaşımız"],
        answer: 1,
        points: 50
    },
    {
        id: 3,
        title: "3. Hafta: Problem Çözme ve Algoritma",
        theory: `
            <h3>🧩 Problem Türleri</h3>
            <p><strong>Basit Problem:</strong> Çözümü kolay ve standarttır (Örn: Çay demlemek).</p>
            <p><strong>Karmaşık Problem:</strong> Çözümü zor olan, alt adımlara ayrılması gereken problemlerdir (Örn: Trafik sorunu, okul başarısını artırmak).</p>
            
            <h3>Algoritma</h3>
            <p>Bir problemi çözmek için izlenen adım adım yoldur.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Algoritma nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Adım adım.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Bir problemi çözmek veya bir amaca ulaşmak için izlenen adım adım yoldur.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Basit probleme bir örnek verin.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Günlük işler.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Çay demlemek, diş fırçalamak, ayakkabı bağlamak.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Karmaşık problem nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Zor ve alt adımlı.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Birden fazla adım, alt problem ve strateji gerektiren zor problemlerdir (Örn: Trafik sorunu).</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Problem çözme sürecinin ilk adımı nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Anlamak.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Problemi doğru tanımlamak ve anlamaktır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Algoritmalar neden sırasıyla yazılmalıdır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Karışıklık.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Adımlar karışırsa sonuca ulaşılamaz veya hatalı sonuç elde edilir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Büyük problemleri küçük parçalara bölmek (alt problemler) çözümü kolaylaştırır.",
        question: "Bir problemi çözmek için tasarlanan adım adım yola ne denir?",
        options: ["Liste", "Algoritma", "Grafik", "Deney"],
        answer: 1,
        points: 50
    },
    {
        id: 4,
        title: "4. Hafta: Algoritma Uygulamaları",
        theory: `
            <h3>🚀 Algoritmanın Faydaları</h3>
            <ul>
                <li>Hata yapma olasılığını azaltır.</li>
                <li>Çözüm süresini kısaltır.</li>
                <li>Hataları fark edip düzeltmeyi kolaylaştırır.</li>
            </ul>
            <p>Mayın tarlası oyununda veya bir labirentte çıkışı bulurken aslında zihnimizde algoritmalar kurarız.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Algoritma kullanmak bize ne kazandırır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hata.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hata yapma olasılığını azaltır, zaman kazandırır ve planlı olmayı sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Bir labirentten çıkmak için nasıl bir yöntem izleriz?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Plan.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Adım adım plan yaparak (algoritma kurarak) ilerleriz, deneme-yanılma yaparız.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Hatalı bir algoritma düzeltilebilir mi?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Evet/Hayır.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Evet, hata ayıklama (debugging) yöntemiyle düzeltilebilir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Mayın tarlası oyununda amacımız nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Güvenli yol.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Mayınlara basmadan bitiş noktasına ulaşan güvenli yolu bulmaktır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Günlük hayatta farkında olmadan kullandığımız bir algoritma örneği verin.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Okula gitmek.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Okula gitmek, yemek yemek, giyinmek gibi rutin işler.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Algoritma yazarken adımları atlamamak çok önemlidir.",
        question: "Aşağıdakilerden hangisi algoritma kullanmanın faydalarından değildir?",
        options: ["Hata yapmayı azaltır", "Zaman kazandırır", "İşi karmaşıklaştırır", "Planlı olmayı sağlar"],
        answer: 2,
        points: 50
    },
    {
        id: 5,
        title: "5. Hafta: Farklı Yollar ve Çözümler",
        theory: `
            <h3>🛣️ En Kısa Yol</h3>
            <p>Bir problemin birden fazla çözüm yolu olabilir. Önemli olan en kısa, en hızlı ve en az maliyetli yolu bulmaktır.</p>
            <p>A noktasından B noktasına giderken farklı yollar seçilebilir. Bilgisayarlar da veri iletirken en hızlı yolu seçmeye çalışır.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Bir problemin sadece tek bir çözümü mü vardır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Alternatifler.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hayır, genellikle birden fazla çözüm yolu vardır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. En iyi çözüm yolu hangisidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Kısa ve hızlı.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">En kısa, en hızlı ve en az maliyetli (yorucu olmayan) yoldur.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Bilgisayarlar veri iletirken hangi yolu tercih eder?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hız.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Veriyi en hızlı iletebileceği en kısa yolu tercih eder.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Çözüm yollarını karşılaştırırken neye dikkat ederiz?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Zaman.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hangi yolun daha kısa sürdüğüne ve daha az kaynak harcadığına.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. "Tekerleği yeniden icat etme" sözü ne anlama gelir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Var olanı kullan.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Zaten bulunmuş bir çözümü sıfırdan yapmaya çalışarak vakit kaybetme, var olanı kullan demektir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Her yol Roma'ya çıkar ama biri daha hızlıdır!",
        question: "Bir problemin çözümünde aşağıdakilerden hangisi tercih edilmelidir?",
        options: ["En uzun yol", "En karmaşık yol", "En kısa ve verimli yol", "En pahalı yol"],
        answer: 2,
        points: 50
    },
    {
        id: 6,
        title: "6. Hafta: Hata Ayıklama (Debugging)",
        theory: `
            <h3>🐞 Hata Ayıklama Nedir?</h3>
            <p>Yazdığımız algoritmada veya kodda çıkan hataları bulup düzeltme işlemidir. Buna İngilizcede 'Debugging' denir.</p>
            <p>Doğadaki su döngüsü gibi algoritmaların da bir sırası vardır. Sıra bozulursa sistem HATA verir.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Hata Ayıklama (Debugging) ne demektir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Düzeltme.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Algoritma veya kodlardaki hataları bulup düzeltme işlemidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Algoritmada sıra hatası olursa ne olur?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sonuç.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Program doğru çalışmaz veya yanlış sonuç verir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. "Ayıkla Pirincin Taşını" sözü bu konuda neyi ifade eder?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Temizleme.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kodların içindeki (pirinç) hataların (taş) bulunup temizlenmesini ifade eder.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. İlk bilgisayar programcısı kimdir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Ada...</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Ada Lovelace.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Bir algoritma düzgün çalışmıyorsa ilk ne yapılmalıdır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Kontrol.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Adımlar tek tek kontrol edilerek hatanın nerede olduğu bulunmalıdır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Hata yapmak öğrenmenin bir parçasıdır. Önemli olan hatayı bulup düzeltmektir.",
        question: "Algoritmada yapılan hataları bulup düzeltme işlemine ne denir?",
        options: ["Kodlama", "Hata Ayıklama", "Veri Girişi", "Kaydetme"],
        answer: 1,
        points: 50
    },
    {
        id: 7,
        title: "7. Hafta: Benzer Sorun Benzer Çözüm",
        theory: `
            <h3>🔄 Örüntü ve Benzerlik</h3>
            <p>Karmaşık bir problemi çözerken, daha önce çözdüğümüz benzer ve basit problemlerden yararlanabiliriz.</p>
            <p>Örneğin: Kantin sırasındaki yoğunluğu çözmek için bulduğumuz "kasa sayısını artırma" çözümü, trafikteki yoğunluk için "gişe sayısını artırma" olarak uygulanabilir.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Benzer sorunlardan yararlanmak neden önemlidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Tecrübe.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Daha önce çözülmüş problemlerin çözüm yollarını kullanarak yeni problemleri daha hızlı çözebiliriz.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Kantin sırasıyla trafik sıkışıklığı arasındaki benzerlik nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Yoğunluk.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">İkisi de "aşırı yoğunluk" ve "dar boğaz" (yetersiz çıkış/kasa) problemidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Örüntü ne demektir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Tekrar.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Belirli bir kurala göre tekrar eden şekil, sayı veya olay dizisidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Mandala çiziminde neye dikkat edilir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Merkez.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Merkezden başlayarak dışa doğru simetrik ve tekrarlı desenler çizilmesine dikkat edilir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Büyük problemleri çözerken basit problemlerin çözümü işe yarar mı?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Evet/Hayır.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Evet, yarar. Karmaşık problemler aslında basit problemlerin birleşimidir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Tekerleği yeniden icat etmeye gerek yok, benzer çözümleri uyarla!",
        question: "Önceki deneyimlerden yararlanarak problem çözmeye ne denir?",
        options: ["Benzerlik Kurma", "Tahmin Etme", "Ezberleme", "Unutma"],
        answer: 0,
        points: 50
    },
    {
        id: 8,
        title: "8. Hafta: Blok Tabanlı Programlama",
        theory: `
            <h3>🧱 Blok Kodlama Araçları</h3>
            <p>Metin tabanlı kod yazmanın zorluğunu aşmak için renkli blokların birleştirilmesiyle yapılan kodlamadır.</p>
            <p><strong>Örnekler:</strong> Scratch, mBlock, Google Blockly, Code.org.</p>
            <p>Bu araçlar kodlama mantığını (döngüler, koşullar) görsel olarak öğretir.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Blok tabanlı programlama nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Yapboz.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kod yazmak yerine hazır kod bloklarını sürükleyip birleştirerek yapılan programlamadır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Blok tabanlı programlama araçlarına 2 örnek verin.</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Panda ve Kedi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">mBlock, Scratch, Code.org, Blockly.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. mBlock programı ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Oyun, robot.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Oyun, animasyon yapmamızı ve robotları programlamamızı sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Kod blokları neye benzer?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Oyuncak.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Legolara veya yapboz parçalarına benzer.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. mBlock kullanmak için İngilizce bilmek şart mıdır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Dil seçeneği.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hayır, Türkçe dil desteği vardır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Bloklar yapboz parçaları gibidir, sadece doğru parçalar birbirine uyar.",
        question: "Aşağıdakilerden hangisi blok tabanlı bir programlama aracıdır?",
        options: ["Notepad", "mBlock", "Excel", "Paint"],
        answer: 1,
        points: 50
    },
    {
        id: 9,
        title: "9. Hafta: mBlock Arayüzü",
        theory: `
            <h3>🐼 mBlock Sahnesi</h3>
            <p><strong>Sahne:</strong> Olayların geçtiği, kuklaların hareket ettiği yer.</p>
            <p><strong>Kukla (Sprite):</strong> Kodladığımız karakterler (Örn: Panda).</p>
            <p><strong>Kod Blokları:</strong> Hareket, Görünüm, Ses gibi gruplara ayrılmış komutlar.</p>
            <p>Genellikle programı başlatmak için <strong>Yeşil Bayrak</strong> kullanılır.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. "Sahne" nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Olay yeri.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Tüm olayların geçtiği, arka planın bulunduğu alandır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. "Kukla" (Sprite) ne demektir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Karakter.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kodladığımız, hareket ettirdiğimiz karakterlere (örneğin Panda) kukla denir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Programı başlatmak için hangi simge kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Renk ve şekil.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Yeşil Bayrak simgesi kullanılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Kırmızı sekizgen buton ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Trafik işareti.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Çalışan programı durdurmaya yarar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Kod blokları nereye sürüklenir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Orta alan.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kodlama (programlama) alanına sürüklenip bırakılır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Kodları sürükleyip orta alana bırakarak programı oluşturursun.",
        question: "mBlock'ta programı genellikle hangi simge ile başlatırız?",
        options: ["Kırmızı Dur", "Yeşil Bayrak", "Mavi Ok", "Sarı Yıldız"],
        answer: 1,
        points: 50
    },
    {
        id: 10,
        title: "10. Hafta: Animasyon Dünyası",
        theory: `
            <h3>🎬 Animasyon Mantığı</h3>
            <p>Gözümüzün kusurundan yararlanarak, resimlerin hızlıca arka arkaya gösterilmesiyle oluşturulan hareket yanılsamasıdır.</p>
            <p>mBlock'ta "Sonraki Kostüm" bloğunu bir döngü içinde kullanarak karakterin yürüyor veya uçuyor gibi görünmesini sağlarız.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Animasyon nasıl oluşur?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hızlı resimler.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Resimlerin veya görüntülerin arka arkaya hızlıca gösterilmesiyle oluşur.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Defter kenarına çizilen çöp adamı yürütmek en basit ne örneğidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Konumuz.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Animasyon (Canlandırma) örneğidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. mBlock'ta karakterin kılığını değiştiren blok hangisidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sonraki...</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"Sonraki Kostüm" bloğudur.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Animasyonun sürekli devam etmesi için hangi blok kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sonsuz.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"Sürekli Tekrarla" bloğu kullanılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Kostümler arası geçiş çok hızlıysa ne yapılmalıdır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Zaman.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Araya "1 saniye bekle" gibi bir bekleme süresi eklenmelidir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Çizgi filmler de aslında binlerce resmin hızlıca gösterilmesidir.",
        question: "Resimlerin arka arkaya hızlıca gösterilmesiyle oluşan hareket görüntüsüne ne denir?",
        options: ["Fotoğraf", "Animasyon", "Heykel", "Tablo"],
        answer: 1,
        points: 50
    },
    {
        id: 11,
        title: "11. Hafta: Haberleşme (İleti Yayınlama)",
        theory: `
            <h3>📢 İleti Yayınlama (Broadcast)</h3>
            <p>Kuklaların birbiriyle konuşmasını veya bir olayın tetiklenmesini sağlar.</p>
            <p>Örnek: Bir kukla "Zıpla" iletisi yayınladığında, diğer kuklalar bu iletiyi alıp zıplama hareketini yapabilir. Bu sayede sahneler arası geçiş ve senkronizasyon sağlanır.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. İleti yayınlama (broadcast) ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Haberleşme.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kuklaların birbiriyle konuşmasını, haberleşmesini veya bir olayı başlatmasını sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Bir kukla hangi durumda harekete geçer?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Almak.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">İlgili iletiyi aldığında (haberi gelince) harekete geçer.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Sahneler arası geçişte ileti kullanılır mı?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Evet/Hayır.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Evet, örneğin oyun bittiğinde "Oyun Bitti" iletisiyle sahne değişebilir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. "Haberini Sal" bloğu hangi menüdedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sarı.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Olaylar menüsündedir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. İleti yayınlama tek bir kukla için mi geçerlidir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Herkes.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hayır, yayınlanan iletiyi o sahnede bekleyen tüm kuklalar duyabilir.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Bir kukla bağırır (yayınlar), diğerleri duyar (iletiyi aldığında) ve harekete geçer.",
        question: "Kuklalar arasında iletişim kurmayı sağlayan yapı hangisidir?",
        options: ["Değişken", "Döngü", "İleti Yayınlama", "Algılama"],
        answer: 2,
        points: 50
    },
    {
        id: 12,
        title: "12. Hafta: Algılama ve İşlemler",
        theory: `
            <h3>👀 Algılama (Sensing)</h3>
            <p>Kuklanın çevresiyle etkileşime girmesini sağlar. "Fareye değdi mi?", "Rengi kırmızı mı?", "Adın ne?" gibi bloklar buradadır.</p>
            
            <h3>➕ İşlemler (Operators)</h3>
            <p>Matematiksel (topla, çıkar) ve mantıksal (büyüktür, küçüktür, ve, veya) işlemlerin yapıldığı yeşil bloklardır.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Algılama blokları ne işe yarar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Dokunma.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kuklanın çevresiyle, fareyle veya diğer kuklalarla etkileşimini kontrol eder.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. İşlemler blokları hangi renktir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Çimen.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Yeşil renklidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. "Fareye değdi mi?" bloğu hangi gruptadır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Açık mavi.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Algılama grubundadır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. İki şartın da sağlanması gerekiyorsa hangi operatör kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Ve.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"Ve" operatörü kullanılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Bilgisayara soru sormak ve yanıt almak için hangi blok kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Adın ne?</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"[Adın ne?] diye sor ve bekle" bloğu kullanılır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Algılama blokları genellikle açık mavi, İşlemler blokları yeşildir.",
        question: "Karakterin fareye değip değmediğini anlamak için hangi blok grubu kullanılır?",
        options: ["Hareket", "Görünüm", "Algılama", "Kontrol"],
        answer: 2,
        points: 50
    },
    {
        id: 13,
        title: "13. Hafta: Kalem ve Çizim",
        theory: `
            <h3>✏️ Kalem Eklentisi</h3>
            <p>Kuklanın sahneye çizim yapmasını sağlar. "Kalemi bastır", "Kalemi kaldır", "Rengi değiştir" gibi komutlar vardır.</p>
            
            <h3>📍 X ve Y Koordinatları</h3>
            <p>Sahne bir koordinat düzlemidir. <strong>X</strong> yatay (sağ-sol), <strong>Y</strong> dikey (yukarı-aşağı) konumu belirtir. Sahnenin tam ortası X:0, Y:0 noktasıdır.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Kalem eklentisi ne sağlar?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Çizmek.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Kuklanın sahneye çizgi çizmesini, resim yapmasını sağlar.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Sahnedeki yatay konuma ne denir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">X/Y.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">X ekseni denir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Sahnenin tam orta noktası nedir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sıfır.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">X:0, Y:0 noktasıdır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Kare çizmek için hangi komutlar tekrarlanır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Git ve Dön.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"100 adım git" ve "90 derece dön" komutları 4 kez tekrarlanır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Çizimi temizlemek için hangi blok kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Sil.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"Tümünü Sil" bloğu kullanılır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "Kare çizmek için: 4 defa (İlerle + 90 derece dön).",
        question: "Ekrana çizim yapabilmek için hangi eklenti/blok grubu kullanılmalıdır?",
        options: ["Ses", "Kalem", "Olaylar", "Değişkenler"],
        answer: 1,
        points: 50
    },
    {
        id: 14,
        title: "14. Hafta: Oyun Tasarımı",
        theory: `
            <h3>🎮 Oyun Yapımı</h3>
            <p>Oyunlarda puan tutmak için <strong>Değişkenler</strong> kullanılır. Karakterlerin hareketi için <strong>Klavye kontrolleri</strong> (Boşluk tuşu, Ok tuşları) kullanılır.</p>
            <p>Örnek: Yıldız toplama oyununda, yıldıza her değdiğimizde Puan değişkenini 1 artırırız.</p>

            <div class="alert alert-light border mt-3">
                <h5>📝 Çalışma Soruları (Defterine Yaz):</h5>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">
                        <strong>1. Oyunlarda puan tutmak için neye ihtiyaç vardır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Değişen kutu.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Değişkenlere ihtiyaç vardır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>2. Karakteri yön tuşlarıyla hareket ettirmek için hangi blok kullanılır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Tuş basılınca.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"Boşluk/Ok tuşuna basılınca" olayı veya "Tuşuna basıldı mı?" algılaması kullanılır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>3. Bir oyunda olması gereken temel unsurlar nelerdir?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hedef.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Hedef, engel, kural ve ödül (puan) olmalıdır.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>4. Oyun bittiğinde ne olmalıdır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Dur.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">"Tümünü Durdur" bloğu ile oyun durmalı veya "Oyun Bitti" ekranı gelmelidir.</p>
                        </details>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <strong>5. Can değişkeni ne zaman azalır?</strong>
                        <details class="mt-2">
                            <summary class="text-primary" style="cursor:pointer; font-size: 0.9em;">💡 İpucu Göster</summary>
                            <p class="small text-muted mt-1 mb-0 border-start border-primary ps-2">Hata.</p>
                        </details>
                        <details class="mt-1">
                            <summary class="text-success" style="cursor:pointer; font-size: 0.9em;">✅ Cevap Göster</summary>
                            <p class="small text-dark mt-1 mb-0 border-start border-success ps-2 bg-success bg-opacity-10 p-2 rounded">Karakter bir engele veya düşmana çarptığında (hata yaptığında) azalır.</p>
                        </details>
                    </li>
                </ul>
            </div>
        `,
        tips: "İyi bir oyunda hedef, engel ve ödül (puan) olmalıdır.",
        question: "Oyunlarda puan, can veya süre gibi değerleri tutmak için ne kullanılır?",
        options: ["Döngü", "Değişken", "Kostüm", "Sahne"],
        answer: 1,
        points: 50
    }
];

lessonData.sixExam = [
    {
        id: "s_choice_1", type: "choice", title: "İlk Bilgisayar",
        text: "Bilinen ilk bilgisayar (hesaplayıcı) hangisidir?",
        options: ["ENIAC", "Abaküs", "Tablet", "Macbook"],
        answer: 1,
        points: 10
    },
    {
        id: "s_choice_2", type: "choice", title: "Veri Türleri",
        text: "Hangisi değişmeyen bir bilgidir (Sabit)?",
        options: ["Hava Durumu", "Maç Skoru", "Suyun Kaynama Noktası", "Kumbaradaki Para"],
        answer: 2,
        points: 10
    },
    {
        id: "s_choice_3", type: "choice", title: "Algoritma",
        text: "Problemi çözmek için izlenen adım adım yola ne denir?",
        options: ["Liste", "Grafik", "Algoritma", "Plan"],
        answer: 2,
        points: 10
    },
    {
        id: "s_choice_4", type: "choice", title: "Hata Ayıklama",
        text: "Yazılım hatalarını bulup düzeltme işlemine ne ad verilir?",
        options: ["Debugging", "Coding", "Saving", "Loading"],
        answer: 0,
        points: 10
    },
    {
        id: "s_choice_5", type: "choice", title: "Blok Kodlama",
        text: "Hangisi blok tabanlı bir programlama aracıdır?",
        options: ["C++", "Java", "mBlock", "Python"],
        answer: 2,
        points: 10
    },
    {
        id: "s_choice_6", type: "choice", title: "Başlatma",
        text: "mBlock/Scratch projeleri genellikle hangi sembolle başlatılır?",
        options: ["Kırmızı Daire", "Yeşil Bayrak", "Mavi Kare", "Sarı Üçgen"],
        answer: 1,
        points: 10
    },
    {
        id: "s_choice_7", type: "choice", title: "Animasyon",
        text: "Hareket yanılsaması oluşturmak için kostümleri arka arkaya değiştirmeye ne denir?",
        options: ["Resim", "Animasyon", "Heykel", "Fotoğraf"],
        answer: 1,
        points: 10
    },
    {
        id: "s_choice_8", type: "choice", title: "Koordinatlar",
        text: "Sahnedeki yatay (sağ-sol) konumu hangi eksen belirtir?",
        options: ["X Ekseni", "Y Ekseni", "Z Ekseni", "A Ekseni"],
        answer: 0,
        points: 10
    },
    {
        id: "s_choice_9", type: "choice", title: "Değişkenler",
        text: "Oyunlarda puanı tutmak için hangisi kullanılır?",
        options: ["Döngü", "Değişken", "Algılama", "Hareket"],
        answer: 1,
        points: 10
    },
    {
        id: "s_choice_10", type: "choice", title: "İletişim",
        text: "Kuklalar arası haberleşmeyi sağlayan komut nedir?",
        options: ["İleti Yayınla (Habersal)", "Sürekli Tekrarla", "10 Adım Git", "Gizlen"],
        answer: 0,
        points: 10
    }
];

lessonData.fiveExam = [
    {
        id: "f_fill_1", type: "fill", title: "Problem Tanımı",
        text: "Çözüm aranması gereken duruma problem denir.",
        code: "{{input}}",
        answers: ["problem"],
        hint1: "Sorun.", hint2: "problem."
    },
    {
        id: "f_sort_1", type: "sort", title: "Problem Çözme Adımları",
        text: "Problem çözme basamaklarını sıraya diz.",
        lines: [
            { id: "1", text: "Problemi Anlama" },
            { id: "2", text: "Plan Yapma" },
            { id: "3", text: "Planı Uygulama" },
            { id: "4", text: "Değerlendirme" }
        ],
        order: ["1", "2", "3", "4"],
        hint1: "Önce anla, sonra planla.", hint2: "Uygula ve kontrol et."
    },
    {
        id: "f_fill_2", type: "fill", title: "Sabit Veri",
        text: "Değeri değişmeyen verilere ne denir?",
        code: "{{input}}",
        answers: ["sabit"],
        hint1: "Değişkenin zıttı.", hint2: "sabit."
    },
    {
        id: "f_fix_1", type: "fix", title: "Algoritma Hatası",
        text: "Ayran yapma algoritmasında sıra hatası var. (Sözde kod)",
        code: "1. Bardağa koy\n2. Yoğurt ve suyu karıştır\n3. İç",
        correct: "1. Yoğurt ve suyu karıştır\n2. Bardağa koy\n3. İç",
        hint1: "Önce karıştırmalısın.", hint2: "Karıştırma işlemi en başta olmalı."
    },
    {
        id: "f_fill_3", type: "fill", title: "Akış Şeması Karar",
        text: "Karar verme (Eğer) adımı için kullanılan şekil.",
        code: "{{input}} dörtgen",
        answers: ["eşkenar"],
        hint1: "Baklava dilimi.", hint2: "eşkenar."
    },
    {
        id: "f_sort_2", type: "sort", title: "Balık Kılçığı",
        text: "Balık kılçığı diyagramı bölümleri.",
        lines: [
            { id: "1", text: "Baş (Problem)" },
            { id: "2", text: "Kılçıklar (Nedenler)" },
            { id: "3", text: "Alt Kılçıklar (Alt Nedenler)" }
        ],
        order: ["1", "2", "3"],
        hint1: "Baştan sona doğru.", hint2: "Genel nedenden özele."
    },
    {
        id: "f_fill_4", type: "fill", title: "Girdi Birimi",
        text: "Bilgisayara veri girişi sağlayan en temel araç (yazı yazmak için).",
        code: "{{input}}",
        answers: ["klavye"],
        hint1: "Tuşları var.", hint2: "klavye."
    },
    {
        id: "f_fill_5", type: "fill", title: "Operatörler",
        text: "İki şartın da doğru olmasını isteyen operatör.",
        code: "{{input}}",
        answers: ["ve"],
        hint1: "İngilizcesi AND.", hint2: "ve."
    },
    {
        id: "f_sort_3", type: "sort", title: "Kare Çizme (Blok)",
        text: "Blok tabanlı kodlamada kare çizme döngüsü.",
        lines: [
            { id: "1", text: "4 Kez Tekrarla" },
            { id: "2", text: "100 Adım Git" },
            { id: "3", text: "90 Derece Dön" }
        ],
        order: ["1", "2", "3"],
        hint1: "Döngü kapsayıcıdır.", hint2: "Git ve Dön işlemi döngünün içindedir."
    },
    {
        id: "f_fill_6", type: "fill", title: "Labirent Döngü",
        text: "Bir işlemi sürekli tekrarlamak için kullanılan yapı.",
        code: "{{input}}",
        answers: ["döngü"],
        hint1: "Tekrar etmek.", hint2: "döngü."
    }
];

// --- CODING GARDEN EXAMPLES ---
const codingExamples = {
    'five': [
        {
            title: "Yön Okları",
            code: "GİT(SAĞ)\nGİT(SAĞ)\nGİT(AŞAĞI)\nAL(ELMAS)",
            type: "block"
        },
        {
            title: "Döngü ile Kare",
            code: "TEKRARLA(4) {\n  GİT(İLERİ)\n  DÖN(SAĞ)\n}",
            type: "block"
        },
        {
            title: "Eğer Bloğu",
            code: "EĞER (YOL_KAPALI) İSE {\n  DÖN(SOL)\n} DEĞİLSE {\n  GİT(İLERİ)\n}",
            type: "block"
        },
        {
            title: "Hazine Avı",
            code: "GİT(İLERİ)\nEĞER (HAZİNE_VAR_MI?) İSE {\n  AL(HAZİNE)\n}\nGİT(GERİ)",
            type: "block"
        },
        {
            title: "Labirent Çözücü",
            code: "SÜREKLİ_TEKRARLA {\n  EĞER (SOL_BOŞ_MU?) İSE {\n    DÖN(SOL)\n    GİT(İLERİ)\n  } DEĞİLSE {\n    DÖN(SAĞ)\n  }\n}",
            type: "block"
        }
    ],
    'six': [
        {
            title: "Değişken Tanımlama",
            code: "SAYI puan = 100\nYAZDIR(puan)",
            type: "pseudo"
        },
        {
            title: "İki Sayıyı Topla",
            code: "SAYI s1 = 10\nSAYI s2 = 20\nTOPLAM = s1 + s2\nYAZDIR(TOPLAM)",
            type: "pseudo"
        },
        {
            title: "Karar Yapısı",
            code: "EĞER (not >= 50) {\n  YAZDIR('Geçti')\n} DEĞİLSE {\n  YAZDIR('Kaldı')\n}",
            type: "pseudo"
        },
        {
            title: "Döngü ile Sayma",
            code: "SAYI i = 1\nDÖNGÜ (i <= 10) {\n  YAZDIR(i)\n  i = i + 1\n}",
            type: "pseudo"
        },
        {
            title: "Çarpım Tablosu (5'ler)",
            code: "SAYI k = 1\nTEKRARLA (10 KEZ) {\n  YAZDIR(k * 5)\n  k = k + 1\n}",
            type: "pseudo"
        }
    ],
    'html': [
        {
            title: "Basit Kart",
            code: `<div style="border:1px solid #ccc; padding:20px; border-radius:10px; text-align:center; font-family:sans-serif;">
  <img src="https://via.placeholder.com/100" style="border-radius:50%; margin-bottom:10px;">
  <h2>Merhaba!</h2>
  <p>Ben bir HTML kartıyım.</p>
  <button style="background:blue; color:white; border:none; padding:10px 20px; border-radius:5px; cursor:pointer;" onclick="alert('Tıklandı!')">Tıkla</button>
</div>`,
            type: "web"
        },
        {
            title: "Hareketli Başlık",
            code: `<h1 style="color:red; animation: slide 2s infinite alternate;">Hareketli Yazı!</h1>
<style>
@keyframes slide {
  from { margin-left: 0; }
  to { margin-left: 100px; color:blue; }
}
</style>`,
            type: "web"
        },
        {
            title: "Renkli Liste",
            code: `<ul>
  <li style="color:red">Elma</li>
  <li style="color:green">Armut</li>
  <li style="color:blue">Muz</li>
  <li style="color:purple; font-weight:bold;">Çilek</li>
</ul>`,
            type: "web"
        },
        {
            title: "Gökkuşağı Metni",
            code: `<h1 class="rainbow">Gökkuşağı Metni</h1>
<style>
.rainbow {
  background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 50px;
}
</style>`,
            type: "web"
        },
        {
            title: "Tablo Örneği",
            code: `<table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%;">
  <tr style="background:#f0f0f0;"><th>Ad</th><th>Soyad</th><th>Puan</th></tr>
  <tr><td>Ali</td><td>Yılmaz</td><td>95</td></tr>
  <tr><td>Ayşe</td><td>Demir</td><td>100</td></tr>
</table>`,
            type: "web"
        }
    ],
    'css': [
        {
            title: "Neon Buton",
            code: `<button class="neon-btn">Neon Işık</button>
<style>
.neon-btn {
  background: black;
  color: #0f0;
  border: 2px solid #0f0;
  padding: 15px 30px;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 10px #0f0;
  transition: 0.3s;
}
.neon-btn:hover {
  background: #0f0;
  color: black;
  box-shadow: 0 0 20px #0f0, 0 0 40px #0f0;
}
</style>`,
            type: "web"
        },
        {
            title: "Dönen Kutu",
            code: `<div class="box"></div>
<style>
.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #ff00cc, #3333ff);
  margin: 50px auto;
  animation: spin 3s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>`,
            type: "web"
        },
        {
            title: "Büyüyen Daire",
            code: `<div class="circle"></div>
<style>
.circle {
  width: 50px; height: 50px;
  background: red;
  border-radius: 50%;
  transition: all 0.5s;
  margin: 20px;
}
.circle:hover {
  width: 150px; height: 150px;
  background: yellow;
}
</style>
<p>Dairenin üzerine gel!</p>`,
            type: "web"
        },
        {
            title: "3D Kart",
            code: `<div class="card">3D Efekt</div>
<style>
.card {
  width: 150px; height: 200px;
  background: #007bff; color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
  transform: perspective(500px) rotateY(20deg);
  transition: transform 0.5s;
}
.card:hover {
  transform: perspective(500px) rotateY(0deg) scale(1.1);
}
</style>`,
            type: "web"
        }
    ],
    'javascript': [
        {
            title: "Sayaç Uygulaması",
            code: `<h1 id="count">0</h1>
<button onclick="arttir()">Artır</button>
<script>
  let sayi = 0;
  function arttir() {
    sayi++;
    document.getElementById('count').innerText = sayi;
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
</script>`,
            type: "web"
        },
        {
            title: "Saat",
            code: `<h2 id="clock"></h2>
<script>
  setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
  }, 1000);
</script>`,
            type: "web"
        },
        {
            title: "Hesap Makinesi (Alert)",
            code: `<button onclick="hesapla()">Topla (10 + 20)</button>
<script>
function hesapla() {
  const s1 = 10;
  const s2 = 20;
  alert('Sonuç: ' + (s1 + s2));
}
</script>`,
            type: "web"
        },
        {
            title: "Rastgele Sayı Üretici",
            code: `<h1 id="num">-</h1>
<button onclick="uret()">Zar At</button>
<script>
function uret() {
  const zar = Math.floor(Math.random() * 6) + 1;
  document.getElementById('num').innerText = 'Gelen sayı: ' + zar;
}
</script>`,
            type: "web"
        }
    ],
    'python': [
        {
            title: "Merhaba Dünya",
            code: "print('Merhaba Dünya!')",
            type: "terminal",
            output: "Merhaba Dünya!"
        },
        {
            title: "Döngü",
            code: "for i in range(5):\n    print(f'Sayı: {i}')",
            type: "terminal",
            output: "Sayı: 0\nSayı: 1\nSayı: 2\nSayı: 3\nSayı: 4"
        },
        {
            title: "Hesap Makinesi",
            code: "x = 10\ny = 5\nprint(f'{x} + {y} = {x+y}')",
            type: "terminal",
            output: "10 + 5 = 15"
        },
        {
            title: "Liste İşlemleri",
            code: "meyveler = ['Elma', 'Armut', 'Muz']\nmeyveler.append('Çilek')\nprint(meyveler)",
            type: "terminal",
            output: "['Elma', 'Armut', 'Muz', 'Çilek']"
        },
        {
            title: "Fonksiyon Tanımlama",
            code: "def selamla(isim):\n    return f'Merhaba {isim}'\n\nprint(selamla('Ali'))",
            type: "terminal",
            output: "Merhaba Ali"
        }
    ],
    'react': [
        {
            title: "Basit Component",
            code: `function Welcome(props) {
  return <h1>Merhaba, {props.name}</h1>;
}

const element = <Welcome name="Ali" />;
ReactDOM.render(element, document.getElementById('root'));`,
            type: "jsx",
            output: "React kodu tarayıcıda derlenmelidir. (Bu bir simülasyon)"
        },
        {
            title: "State Hook",
            code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Butona {count} kez tıkladın</p>
      <button onClick={() => setCount(count + 1)}>
        Tıkla
      </button>
    </div>
  );
}`,
            type: "jsx",
            output: "React kodu tarayıcıda derlenmelidir. (Bu bir simülasyon)"
        },
        {
            title: "Effect Hook",
            code: `useEffect(() => {
  document.title = \`Sayı: \${count}\`;
});`,
            type: "jsx",
            output: "(Effect Hook örneği)"
        }
    ],
    'git': [
        {
            title: "Yeni Depo",
            code: "git init\ngit add .\ngit commit -m 'İlk commit'",
            type: "terminal",
            output: "Initialized empty Git repository in /project/.git/\n[master (root-commit) 1a2b3c] İlk commit\n 3 files changed, 15 insertions(+)"
        },
        {
            title: "Yepyeni Dal (Branch)",
            code: "git checkout -b yeni-ozellik",
            type: "terminal",
            output: "Switched to a new branch 'yeni-ozellik'"
        },
        {
            title: "Durum Kontrolü",
            code: "git status",
            type: "terminal",
            output: "On branch master\nNothing to commit, working tree clean"
        },
        {
            title: "Geçmişe Bakış",
            code: "git log --oneline",
            type: "terminal",
            output: "a1b2c3d (HEAD -> master) Yeni özellik eklendi\n4e5f6g7 Hata düzeltmeleri\n8h9i0j1 İlk commit"
        }
    ]
};

// --- YEPYENİ: KONUYA ÖZEL AKILLI SINAV OLUŞTURUCU (5. ve 6. SINIFLAR) ---
(function () {
    const stripHtml = (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    ['five', 'six'].forEach(grade => {
        if (!lessonData[grade]) return;

        lessonData[grade].forEach((lesson, index) => {
            let weekNum = index + 1;
            let questions = [];
            let currentQ = 1;

            let studyQ = lesson.studyQuestions || [];
            let theoryText = stripHtml(lesson.theory || "");
            let sentences = theoryText.split(/(?<=[.!?])\s+/)
                .map(s => s.trim())
                .filter(s => s.length > 15 && s.indexOf('?') === -1);

            // Eğer yeterli cümle kalmazsa sahte cümleler ekle (hata fırlatmaması için)
            if (sentences.length < 10) {
                let defaultWords = [lesson.title, "Teknoloji", "Kodlama", "İnternet", "Veri", "Bilgi", "Yazılım", "Donanım", "Problemler", "Çözümler"];
                for (let k = 0; k < 10; k++) {
                    sentences.push(lesson.title + " konusunda " + defaultWords[k] + " kısmı çok önemlidir.");
                }
            }

            // 5 ADET BOŞLUK DOLDURMA SORUSU
            for (let i = 0; i < 5; i++) {
                let fillSentence = "";
                let rawKeyWord = "bilgi";
                let hintTxt = "Ders içeriğinden hatırlayın.";

                if (studyQ[i]) {
                    fillSentence = studyQ[i].answer;
                    hintTxt = studyQ[i].question; // Çalışma sorusunu ipucu olarak kullanıyoruz!
                    let words = fillSentence.split(" ").filter(w => w.length > 3 && !w.includes('bir') && !w.includes('için') && !w.includes('göre'));
                    rawKeyWord = words[Math.floor(words.length / 2)] || words[0] || "bilgi";
                } else {
                    fillSentence = sentences[i];
                    let words = fillSentence.split(" ").filter(w => w.length > 4);
                    rawKeyWord = words[Math.floor(words.length / 2)] || words[0] || "kavram";
                    hintTxt = "Konu metninde geçen bir cümle.";
                }

                let keyWord = rawKeyWord.replace(/[.,'"]/g, "").toLowerCase();
                let maskedSentence = fillSentence.replace(rawKeyWord, "_____");

                questions.push({
                    id: `${grade}_w${weekNum}_autoF_${i}`,
                    type: 'fill',
                    title: `Soru ${currentQ++} (Boşluk Doldurma) - ${lesson.title}`,
                    text: `Dersimizdeki şu cümleyi doğru kelimeyle tamamlayınız:\n\n"${maskedSentence}"`,
                    code: "Eksik Kelime: {{input}}",
                    answers: [keyWord, keyWord.toUpperCase(), keyWord.charAt(0).toUpperCase() + keyWord.slice(1)],
                    hint1: "İpucu Soru:", hint2: hintTxt
                });
            }

            // 5 ADET AÇIK UÇLU YORUM SORUSU
            for (let i = 0; i < 5; i++) {
                let openQ = "";
                let expectedAns = "";

                if (studyQ[i]) {
                    openQ = studyQ[i].question;
                    expectedAns = studyQ[i].answer;
                } else {
                    let s = sentences[i + 5] || sentences[i] || lesson.title;
                    openQ = `Dersimizde geçen şu ifadenin ne anlama geldiğini kendi cümlelerinizle açıklayınız:\n"${s}"`;
                    expectedAns = "Bu konunun temel mantığıdır.";
                }

                let keys = expectedAns.split(" ").filter(w => w.length > 4).map(w => w.replace(/[.,'"]/g, "").toLowerCase());

                questions.push({
                    id: `${grade}_w${weekNum}_autoO_${i}`,
                    type: 'open',
                    title: `Soru ${currentQ++} (Açık Uçlu) - ${lesson.title}`,
                    text: openQ,
                    code: "",
                    answers: keys.length > 0 ? keys : ["konu", "kavram", "önemli", "doğru", "bilgi", "mantık"],
                    correct: expectedAns,
                    hint1: "Nasıl çözerim?", hint2: "Ders notlarını hatırlayarak kendi cümlelerinizi kurun."
                });
            }

            lesson.weeklyExam = questions;
        });
    });
})();
