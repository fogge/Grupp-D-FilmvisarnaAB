class Popstate extends Base{

  constructor(){
    super();
    this.clickEvents();
    this.changePage();
    window.addEventListener('popstate', () => this.changePage());
  }

  makeUrl(url){
    url = url.replace(/,/g, "");
    url = url.replace(/ /g, "_");
    return url;
  }

  clickEvents(){
    let that = this;
    $(document).on('click','.pop',function(e){
      //Create a push state preventDefault
      let href = $(this).data('movie');
      href = that.makeUrl(href);
      history.pushState(null, null, href);
      //Call the change page function
      that.changePage();
      //Stop the browers from starting a page reload
      e.preventDefault();
    })};


  changePage(){
    //React on page changed, replace parts of DOM
    // get the current url
    let url = location.pathname;

    let urls = {
      '/' : 'startpage',
      '/Tjuren_Ferdinand' : 'movieFerdinand',
      '/Wind_River': 'movieWindRiver',
      '/Three_Billboards_Outside_Ebbing_Missouri': 'movieThreeBillboards',
      '/Call_Me_By_Your_Name': 'movieCallMe'
    }

    let methodName = urls[url];
    this[methodName]();

  }

  startpage(){
    $('main').empty();
    let startPage = new StartPage();
    startPage.render('main');
    console.log('lalala');
  }

  movieFerdinand(){
    $('.leftContainer').empty();
    let moviepage = new Movie('Tjuren Ferdinand');
    console.log('Ferdinand');
  }

  movieWindRiver(){
    $('.leftContainer').empty();
    let moviepage = new Movie('Wind River');
  }

  movieThreeBillboards(){
    $('.leftContainer').empty();
    let moviepage = new Movie('Three Billboards Outside Ebbing, Missouri');
  }

  movieCallMe(){
    $('.leftContainer').empty();
    let moviepage = new Movie('Call Me By Your Name');
  }

}