var htmls = {
  "sections": '<div class="col-sm-4 portfolio-item"><div class="col-lg-12 text-center"><h3>التصميم الهندسي التراثي القديم</h3></div><a href="#portfolioModal5" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i></div></div><img src="img/portfolio/safe.png" class="img-responsive" alt=""></a></div>'
}
var sectionsList = [
  {"name":"الهدايا ولاكسسورات", "img":"img/portfolio/cabin.png"},
  {"name":"المنتجات التراثيه", "img":"img/portfolio/cabin.png"},
  {"name":"منتجات الضيافه والاستقبال", "img":"img/portfolio/cabin.png"},
  {"name":"المنتجات القماشية والصوفيه والورقيه", "img":"img/portfolio/cabin.png"},
  {"name":"الازياء التراثيه", "img":"img/portfolio/cabin.png"},
  {"name":"الموضه والاناقه", "img":"img/portfolio/cabin.png"},
  {"name":"منتجات العطور  والدخون", "img":"img/portfolio/cabin.png"},
  {"name":"الحلويات الشعبيه", "img":"img/portfolio/cabin.png"},
  {"name":"التصميم الهندسي التراثي القديم", "img":"img/portfolio/cabin.png"},
  {"name":"التصميم  الهندسي الحديث", "img":"img/portfolio/cabin.png"},
  {"name":"الرسم واللوحات الفنيه"}
];

function getSections() {
  console.log("getSections");
  var sections = document.getElementById("sections");

  for(var i = 0; i < sectionsList.length; i++) {
    console.log("getSections");

    var item = document.createElement("div");
    var itemText = document.createElement("div");
    var h3 = document.createElement("h3");
    var link = document.createElement("a");
    var caption = document.createElement("div");
    var captionContent = document.createElement("div");
    var itag = document.createElement("i");
    var img = document.createElement("img");

    item.className="col-sm-4 portfolio-item";
    itemText.className="col-lg-12 text-center";
    link.className="portfolio-link";
    caption.className="caption";
    captionContent.className="caption-content";
    itag.className="fa fa-search-plus fa-3x";
    img.className="img-responsive";

    link.href="#portfolioModal" + i;
    link.setAttribute('data-toggle', 'modal');
    img.src = sectionsList[i].img
    h3.innerHTML = sectionsList[i].name;

    item.appendChild(itemText);
    item.appendChild(link);
    itemText.appendChild(h3);

    captionContent.appendChild(itag);
    caption.appendChild(captionContent);
    link.appendChild(caption);
    link.appendChild(img);

    var range = document.createRange();
    range.selectNodeContents(sections);
    var frag = range.createContextualFragment(htmls.sections);
    sections.appendChild(item);


    var sec = htmls.sections;
    console.log(sec);
    sec.replace(new RegExp('link', 'g'),"#portfolioModal" + i);
    sec.replace(new RegExp('mmimg', 'g'), sectionsList[i].img);
    sec.replace(new RegExp('nnnname', 'g'),sectionsList[i].name);
    console.log(sec);
    var frag = range.createContextualFragment(sec);
    //sections.appendChild(frag);
  }
}
