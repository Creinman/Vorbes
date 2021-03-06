(function ($) {
  var scrollSlickAnticrashTimer = 0;
  var lastNodes = '';

  $(document).ready(function(){
    //Drupal.behaviors.sectionLoadMore = {
    $('.block-href-material .load_more, .page-life-woman .load_more').click(section_load_more_nodes);
    $('.block-href-material .search_load_more').click(search_load_more_nodes);


    //Drupal.behaviors.forbesLifeWoman = {
    forbes_life_woman();


    //Drupal.behaviors.fancyBox = {
    fancyBoxInit();

    // Применение к изображениям в статье библиотеки magnific popup
    magnificPopupInit($('.body-page'));


    //Drupal.behaviors.brandvoice = {
    brandVoiceInit();


    //Drupal.behaviors.mldrTooltip = {
    mldrTooltipInit();


    //Drupal.behaviors.authorPage = {
    authorInforMoreInit();

    //Drupal.behaviors.mainSectionTab = {
    $('.main-section-tab .list li').click(function(){
      mainSectionTabClick($(this));
    });
    if(window.location.hash) {
      changePopularTab();
    }
    if( (window.location.pathname=='/popular') ||
        (window.location.pathname.toString().indexOf('/popular')===0) ) {
      changePopularTitle();
    }

    // readers choice 2018
      $('.readers-choice-select-js').on('change', function (e) {
        var link = $(':selected', $(this)).data('link');
        if (link) {
          window.location = link;
          return;
        }

        var $target = $($(this).data('target'));

        $('.list', $target).removeClass('active');
        $('.list[data-age="' + $(this).val() + '"]', $target).addClass('active');


        // var $target = $()
        //
        //
        //   var tagAge = tab.attr('data-age');
        //   var indx = tab.index();
        //
        //   var indxIdName = tab.parents('.main-section-list').attr('id');
        //   if(!indxIdName) indxIdName = 'forbes-author';
        //   var $blockHrefMaterial = $('#' + indxIdName + ' .block-href-material');
        //   tab.parent().find('li').removeClass('active');
        //   tab.addClass('active');
        //   $blockHrefMaterial.addClass('hide').removeClass('active');
        //   var currentMaterialBlock = $blockHrefMaterial.eq(indx);
        //   currentMaterialBlock.addClass('active').removeClass('hide');
        //   newsVisibilityChanging(currentMaterialBlock);
      });

    //Drupal.behaviors.antiBlock = {
    createBW_Warning();


    //Drupal.behaviors.nodeOpenEdit = {
    var tab_links = null;
    setInterval(function(){
      tab_links = $('.pane-page-tabs a');

      for (var i = 0; i < tab_links.length; i++) {
        href = $(tab_links[i]).attr('href');
        if(href.indexOf('/edit') + 1) {
          ver_nid = parseInt(href.substr(6));
          if (window.sessionStorage && window.localStorage) {
            now_time = parseInt(new Date().getTime()/1000);
            edit_now = localStorage.getItem('in_edit_' + ver_nid);
            edit_now = parseInt(edit_now);
            if ((now_time - edit_now) < 5) {
              //редактируется, блочим
              $(tab_links[i]).attr('onclick', 'return false;');
              $(tab_links[i]).addClass('locked-link');
            } else {
              //редактировалась давно, разблочить
              $(tab_links[i]).removeClass('locked-link');
              $(tab_links[i]).removeAttr('onclick');
              //удалить из стораджа
              localStorage.removeItem('in_edit_' + ver_nid);
            }
          }
        }
      }
    },3000);


    //Drupal.behaviors.popular = {
    $('.page-popular #forbes-section .main-section-tab .show_category').click(function() {
      $(this).addClass('hide');
      $('.page-popular #forbes-section .main-section-tab .categories').removeClass('hide');
    });


    //Drupal.behaviors.brandvoice_link = {
    var brandVoiceLogo = $('.drum-brandvoice .logo a');
    if(brandVoiceLogo.length) {
      var url = brandVoiceLogo.attr('href');

      $('header .under-menu .forbes-pic-logo').closest('a').attr('href', url);
    }


    //Drupal.behaviors.forbes_100years = {
    /*if(1*jQuery('#node_section').attr('content') == 19480) {
      var url = '/special/100/';
      $('header .under-menu .forbes-pic-logo').closest('a').attr('href', url);
    }*/
    if(jQuery('[name="logo_url"]').length > 0) {
      var url = jQuery('[name="logo_url"]').attr('content');
        console.log('url='+url)
      $('header .under-menu .forbes-pic-logo').closest('a').attr('href', url);
    }

    //  Drupal.behaviors.page_subscribe = {
    $('.drum-brandvoice-head-right .bt-blue-mode').click(function(e){
      subscribe_unisender_layer(1);
    });
    $('.subscribe-this-page .x').click(function() {
      subscribe_unisender_layer(0);
    });
    $('.subscribe-this-page .subm-it').click(function(e) {
      console.log('emailed');
      subscribeThisPage($(this));
      e.stopPropagation();
    });


    //Drupal.behaviors.iframe_resize = {
    iframeTotalResize();
    setTimeout(function () {
      iframeTotalResize();
    }, 2000);


    //Drupal.behaviors.slickAntiCrash = {
    slickAntiCrash();
    $(window).scroll(function () { slickAntiCrashRunner(); });


    //Drupal.behaviors.antiHideAlsoInterested  = {
    showBottomAlsoInterested();



    if($('body').hasClass('front') || $('body').hasClass('page-taxonomy-term-423') || $('body').hasClass('page-taxonomy-term-57') || $('body').hasClass('page-taxonomy-term-43849') || $('body').hasClass('page-taxonomy-term-44683')) {
        onMainGallery();
    }

    drupalEditorPanels();
    forShortStory();
    renderBillionaireGraph();
    infinityPage();
  });

  window.topBanner = function(adId) {
    const $bannerId = adId.getAttribute('id');
    const $header = document.querySelector('body#theme2018 .header');
    const $headerOffsetTop = $header.offsetTop;
    const $banner = document.getElementById($bannerId);
    const $bannerHeight = $banner.clientHeight;
    const $pageNode = document.querySelector('body.page-node');
    const topBannerSection = document.querySelector('.top-bn');
    let $bannerTime = 3000;

    const $content = document.querySelectorAll('.content');
    let $contentId = 0;

    const destroyBanner = function() {
      const shares = document.querySelector('.shares');
      const rightBanner = document.querySelector('.bn .fix');
      setTimeout(function() {
        topBannerSection.classList.remove('is-fixed');
        document.querySelector('.header').style.top = 0+'px';
        if (shares) document.querySelector('.screen-' + $contentId + ' .shares').style.top = 90+'px';
        if (rightBanner) document.querySelector('.screen-' + $contentId + ' .bn .fix').style.top = 0+'px';
      }, $bannerTime);
    };

    if ($pageNode) {
      for (let i = 0; i < $content.length; i++) {
        if ($content[i].getAttribute('data-screen').length !== 0) {
          $contentId = $content[i].getAttribute('data-screen');
        }
      }

      if ($contentId == 0) {
        console.log($contentId);
        topBannerSection.classList.add('is-fixed');
        $header.style.top = $bannerHeight+'px';
        document.querySelector('.screen-' + $contentId + ' .shares').style.top = ($bannerHeight+120)+'px';
        document.querySelector('.screen-' + $contentId + ' .bn .fix').style.top = ($bannerHeight+120)+'px';
        destroyBanner();
      } else {
        topBannerSection.classList.remove('is-fixed');
      }
    } else {
      topBannerSection.classList.add('is-fixed');
      $header.style.top = $bannerHeight+'px';
      destroyBanner();
    }

    //window.showBtnOpenMenu($headerOffsetTop);
  };

  function section_load_more_nodes() {
    var tag = $(this);
    var tid = tag.attr('data-tid');
    var pack_nid = tag.attr('data-pack-nid');
    var author_id = tag.attr('data-author-id');
    var opt = '';
    var optional = tag.attr('data-optional');
    var popular = tag.attr('data-popular')*1;
    var display = tag.attr('data-display');
    var url = '';
    if (optional != undefined) {
      opt = '?optional=' + optional;
    }
    var page = tag.attr('data-pagenumber');
    tag.html('<img src="/themes/forbes/img/wait1.gif" alt="wait please" title="wait please" />');

    if(page>0) {
      if (author_id > 0) {
        url = '/author_more_pages/' + author_id + '/' + display + '/' + page + opt
      } else if (popular>0) {
        url = '/popular_more_pages/' + display + '/' + tid + '/' + page
      } else if (tid !== undefined) {
        url = '/section_more_pages/' + tid + '/' + page + opt
      } else if (pack_nid > 0) {
        url = '/package_more_pages/' + pack_nid + '/' + page
      }
      if (url) {
        $.ajax({
          url: url,
          dataType: 'json',
          success: function (data) {
            if (data != '') {
              tag.after(data);
              load_more_news(tag);
              var parnt = tag.parent();
              tag.remove();
              parnt.find('.load_more').click(section_load_more_nodes);
            } else {
              tag.css('opacity', 0);
            }
          }
        });
      }
    }
  }

  function load_more_news(tag) {
    if(mob) return;

    var newsList = $('.view-id-news .view-content');
    //console.log('news count', newsList.length);
    if(newsList.length) {
      var newsCount = newsList.find('.views-row').length;
      var currentMaterialBlock = tag.closest('.block-href-material');
      var materialList = currentMaterialBlock.find('.item-material').length;
      var neededNewsCount = materialList*2 - 6;
      var newsDiff = neededNewsCount - newsCount;
      //console.log('news', newsCount, neededNewsCount, newsDiff, '/news_more_pages/' + newsCount + '/' + newsDiff);
      if(newsDiff>0) {
        $.ajax({
          url: '/news_more_pages/' + newsCount + '/' + newsDiff,
          success: function (data) {
            if (data != '') {
              newsList.parent().append($(data).find('.view-content'));
              newsVisibilityChanging(currentMaterialBlock);
            }
          }
        });
      }else{
        newsVisibilityChanging(currentMaterialBlock);
      }
    }
  }

  function newsVisibilityChanging(currentMaterialBlock) {
    var newsList = $('.view-id-news .view-content');
    if(!newsList.length) return;
    var newsMaterials = newsList.find('.views-row');
    var newsMaterialsCount = newsMaterials.length;
    var materialCount = currentMaterialBlock.find('.item-material').length;
    var newsMustBe = materialCount*2-6;
    //console.log('count compare', newsMaterialsCount, newsMustBe, materialCount);
    newsMaterials.each(function(i, item) {
      if(i<newsMustBe) {
        $(item).show();
      }else{
        $(item).hide();
      }
    })
  }


  function mainSectionTabClick(tab) {
    var tagAge = tab.attr('data-age');
    var indx = tab.index();
    if (tab.attr('class') != 'active' && tab.hasClass('mobile') != true) { //for desktop
      var indxIdName = tab.parents('.main-section-list').attr('id');
      if(!indxIdName) indxIdName = 'forbes-author';
      var $blockHrefMaterial = $('#' + indxIdName + ' .block-href-material');
      tab.parent().find('li').removeClass('active');
      tab.addClass('active');
      $blockHrefMaterial.addClass('hide').removeClass('active');
      var currentMaterialBlock = $blockHrefMaterial.eq(indx);
      currentMaterialBlock.addClass('active').removeClass('hide');
      newsVisibilityChanging(currentMaterialBlock);
    } else if (tab.hasClass('mobile') == true){                                //for mobile
      if( tab.hasClass('true') != true) {
        var indent = ($('body').hasClass('page-news')) ? 3 : 0;
        console.log(indent);
        tab.addClass('true');
        var $thisMainSectionTab  = tab.parents('.main-section-tab');
        var top = $thisMainSectionTab.outerHeight(true) - parseInt($thisMainSectionTab.css('border-top-width'));
        var massText = [];
        tab.parent().find('li').each(function(indx){
          var thisLiText = $(this).not('.active,.mobile').text();
          if ( thisLiText != ''){
            var thisBlockText = '<div class="item-section" data-index="' + indx + '">' + thisLiText + '</div>';
            massText.push(thisBlockText);
          }
        });
        $thisMainSectionTab.append('<div class="list-for-mobile" style="top:' + (top - indent) + 'px;">' + massText.join('') + '</div>');
        $('body').on('click', '.item-section', function(){
          var s = parseInt($(this).attr('data-index'));
          $(this).parents('.main-section-tab').find('.list li').eq(s).click();
          $(this).parents('.main-section-tab').find('.list li.mobile').removeClass('true').text($(this).text());
          $(this).parent().remove();
        });
      } else {
        $('.main-section-tab .list-for-mobile').remove();
        tab.removeClass('true');
      }
    }
    var poplist = $('.page-popular .block-authors-rating .author_poplist');
    poplist.removeClass('active');
    poplist.eq(indx).addClass('active');
    if(tagAge) {
      window.location.hash = '#' + tagAge;
    }

    changePopularTitle();
  }

  function changePopularTitle() {
    return true;
    var tagAge = $('.main-section-tab .list li.active').attr('data-age');

    var title = 'Forbes.ru | Самые популярные материалы';
    var section = $('.main-section-tab .categories a.active').text();
    if(section && section!='Все категории') title += ' раздела '+section;
    var tagAges = { 'today': 'сегодня',  'week': 'неделю',  'month': 'месяц',  'year': 'год' };
    if(tagAges[tagAge]) title += ' за '+tagAges[tagAge];
    document.title = title;
  }

  function changePopularTab() {
    var items = $('.main-section-tab .list li');
    var ages = [];
    items.each(function (i, item) {
      var age = $(item).attr('data-age');
      ages[age] = i;
    });
    var currAge = window.location.hash.replace('#', '');
    if(ages[currAge]) {
      items.eq(ages[currAge]).click();
    }
  }



  function search_load_more_nodes() {
    var tag = $(this);
    var page = tag.attr('data-pagenumber');
    var search = $('.block-page-search input[name="search_api_views_fulltext"]').attr('value');
    var sort = $('.ap-solr-filter a.active-link').attr('data-sort-by');
    tag.html('<img src="/themes/forbes/img/wait1.gif" alt="wait please" title="wait please" />');

    if(page > 0){
      $.ajax({
        url: '/search?page=' + page + '&sort_by=' + sort + '&search_api_views_fulltext=' + search,
        success: function(data) {
          tag.after(data);
          var parnt = tag.parent();
          tag.remove();
          parnt.find('.search_load_more').click(search_load_more_nodes);
        }
      });

    }
  }

  function forbes_life_woman() {
    if(!$('.page-life-woman').length) {
      return;
    }
    var w = $(window).width();
    //console.log('w', w);
    if(w<=768 && w>414) {
      $('.page-life-woman').parent().prepend('<div class="page-life-woman page-life-woman2"></div>');
      $('.page-life-woman2').append($('.page-life-woman').find('.first-material'));

    }

  }

    function magnificPopupInit(context) {
        // Добавление ссылок в качестве оберток картинок, необходимых для просмотра изображений в popup окнах
        context.find('img.media-element').each(function(i, item) {
            var img = $(item);
            var a = $('<a class="magnific-popup" href="'+img.attr('src')+'"></a>');
            img.after(a);
            img.appendTo(a);
            a.magnificPopup({type:'image'});
        });
    }

  function fancyBoxInit() {
    var i = 0;
    $('.body-part-top img.forbes-wysiwyg-image-no-border, .body-part-top img.forbes-wysiwyg-image, ' +
      '.body-part-top img.fancyboxed, ' + '.body-part-bottom img.fancyboxed, ' +
      '.body-part-bottom img.forbes-wysiwyg-image-no-border, ' +
      '.body-part-bottom img.forbes-wysiwyg-image').each(function(i, item) {
      var img = $(item);
      if(img.parent().prop('tagName')=='A') { return; }
      img.after('<a href="'+img.attr('src')+'" class="body_image_'+i+' body_image"></a>');
      var a = img.parent().find('.body_image_'+i).append(img);
      if(a.fancybox) a.fancybox({
        //'hideOnContentClick': true
      });
    });
  }

  function brandVoiceInit() {
    $('.drum-brandvoice .bt-blue-mode, .pane-bottom-in-brandvoice .bt-blue-mode').click(function(){
      var btn = $(this);
      btn.parent().find('.text').height('auto');
      btn.hide();
    });

    if($('body').hasClass('page-forbes-brandvoice-emc')) {
      $('.small-photo-block .small-photo-block-item .photo_title').each(function(i, item){
        var titleTag = $(item);
        var text = titleTag.text().split(':');
        if(text.length>1) {
          titleTag.html(text[0].split(' ').join("<br/>"));
        }
      });


    }
  }


  function mldrTooltipInit() {
    var body_divs = $('.body-part-top, .body-part-bottom, .photo-text-block');
    var isMob =  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

    body_divs.find('a[data-href^="/node/"], a[data-href^="http://www.forbes.ru/node/"], a[data-href^="https://www.forbes.ru/node/"]').each(function () {
      var tag_a = $(this);
      var nid = tag_a.attr('data-href').replace('http://www.forbes.ru/node/', '').replace('https://www.forbes.ru/node/', '');
      nid = nid.replace('/node/', '');
      var tooltip = $('.mldr_tooltip[data-nid="'+nid+'"]');
      var rating = tooltip.attr('data-rating');
      var pr_type = tooltip.attr('data-p-type');
      if (rating > 0) {
        var tag_a_letter = '';
        if (isMob != true) {
          if (tag_a.parents('.slick-list').length == 0){
            tag_a_letter = 'a'
          } else {
            tag_a_letter = 'g'
          }
          $('body').append(tooltip);
        } else {
          $('.mldr_tooltip_anchor[data-nid='+nid+']').append(tooltip);
        }
        tag_a.after(tag_a.text() + ' <span class="mldr_tooltip_anchor '+tag_a_letter+' '+pr_type+'" data-nid="'+nid+'"><span>F</span> '+rating+'</span>');

        tag_a.remove();
      }
    });


    function MlrdrTooltipAnchor(anch) {
        $('.mldr_tooltip').each(function () {
            $(this).hide();
        });

        var temp_nid = anch.attr('data-nid');
        var float_div = $(".mldr_tooltip[data-nid='" + temp_nid + "']:last"); //+ 'clone'
        //console.log('mldr_tooltip', temp_nid, float_div.length, ".mldr_tooltip[data-nid='" + temp_nid + "']", float_div);

        float_div.css({
            "position" : "absolute",
            "top"      : (anch.offset().top - float_div.outerHeight() - 13) + "px",
            "left"     : (anch.offset().left - float_div.outerWidth()/2 + anch.width()/2 + 5 ) + "px"
        });

        float_div.show();
        float_div.mouseover(function (event) {
            clearTimeout($(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId'));
        }).mouseleave(function () {
            timeoutId = setTimeout(function () {
                $(".mldr_tooltip[data-nid=" + temp_nid + "]").fadeOut(300);// + 'clone'
            }, 300);
            $(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId', timeoutId);
        });

        clearTimeout($(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId'));

    }

    function MlrdrTooltipAnchorOver(anch) {
        temp_nid = anch.attr('data-nid');
        timeoutId = setTimeout(function () {
            $(".mldr_tooltip[data-nid=" + temp_nid + "]").fadeOut(300);  //+ 'clone'
        }, 300);
        $(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId', timeoutId);
    }


    if (isMob != true) {
      // mldr_tooltip_anchor в статье.
      $('.mldr_tooltip_anchor.a').mouseover(function (e) {
        MlrdrTooltipAnchor($(this));
      }).mouseleave(function () {
          MlrdrTooltipAnchor($(this));
      });

      // mldr_tooltip_anchor внутри галлереи.
      $('.mldr_tooltip_anchor.g').mouseover(function (e) {
          MlrdrTooltipAnchor($(this));
      }).mouseleave(function () {
        MlrdrTooltipAnchor($(this));
      });
    } else {
      $('.mldr_tooltip_anchor').click(function(){
        var thisBlockMTA = $('.mldr_tooltip[data-nid="' + $(this).attr('data-nid') + '"]')[0].outerHTML;
        $('body').addClass('modal-mldr-open').append('<div class="modal-menu modal-mldr_tooltip_true">' +
          '<div class="modal-menu-close">' +
            //'<img src="http://cdn-new.forbes.ru/themes/forbes/img/modal-menu-close-v0.1.svg" width="18" height="18" alt="Закрыть" title="Закрыть">' +
            '<img src="/themes/forbes/img/modal-menu-close-v0.1.svg" width="18" height="18" alt="Закрыть" title="Закрыть">' +
          '</div>' + thisBlockMTA + '</div>');
        $('.modal-mldr_tooltip_true .mldr_tooltip').show();
      });

      $('body').on('click', '.modal-mldr_tooltip_true .modal-menu-close', function(){
        $('body').removeClass('modal-mldr-open').find('.modal-menu.modal-mldr_tooltip_true').remove();
      });
    }

  }




  //Ex-js.js

  // Запуск mediator
  var timerMediatorId = setInterval(function() {
    if(window._mediator) {
      window._mediator.start();
      console.log('mediator started');
      clearInterval(timerMediatorId);
    } else {
      console.log('mediator not started');
    }
  }, 500);
  setTimeout(function() {
    clearInterval(timerMediatorId);
    console.log('mediator started done');
  }, 5000);

  var isMobile =  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
  var dWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var $bannerBlock = $('.top-bn');
  var tbh = $bannerBlock.height();
  (tbh == null) ? tbh = 0 : tbh = tbh;
  var adminMenuHeight = 0;
  setTimeout(function(){
    if ($('body').hasClass('admin-menu')) {
      adminMenuHeight = $('#admin-menu').outerHeight();
      tbh = tbh + adminMenuHeight;
      var adm1 = document.getElementById('admin-menu');
      //какая-то херня убивает весь скрипт ниже. Убрал в отдельный поток
      if(adm1) adm1.insertAdjacentHTML('afterend', '<style>html body.admin-menu {margin-top: ' + adminMenuHeight + 'px !important;}</style>');
    }
  }, 200);

  function changesTheTopBanner(){
    // выбираем целевой элемент
    var target = document.getElementsByClassName('top-bn')[0];
    // создаём экземпляр MutationObserver
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type == 'childList' || mutation.type == 'subtree'){
          tbh = $bannerBlock.height();
          fixMenuOrNoFixMenu();
        }
      });
    });
    /*
     конфигурация нашего observer:
     subtree: true - изменения должны быть не только у элемента, но и у потомков
     childList: true - это указывает что нужно отслеживать изменение количества потомков
     */
    var config = { childList: true, subtree: true };
    // передаём в качестве аргументов целевой элемент и его конфигурацию
    // observer.observe(target, config);
    // позже можно остановить наблюдение
    //observer.disconnect();
  }
  changesTheTopBanner();


  // open modal menu
  if (isMobile != true) {
    var scrollWidth = (function(){
      var div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      var width = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      return width;
    })();
  }
  $('.burger').click(function(){
    $('body').addClass('modal-menu-open').css({
      'padding-right' : ((scrollWidth != undefined)? scrollWidth + 'px' : '')
    });
    var $modalMenu = $('.modal-menu');
    var modalMenuContentHeight = $('.modal-menu-body').outerHeight() + $('.modal-menu-footer').height();
    if ($modalMenu.height() > modalMenuContentHeight){
      $modalMenu.addClass('big-height');
    }
  });
  $('.modal-menu-close').click(function(){
    $('body').css({
      'padding-right' : ''
    }).removeClass('modal-menu-open');
    $('.modal-menu').removeClass('big-height');
  });
  $(window).keydown(function(eventObject){
    if (eventObject.which == 27 && $('body').hasClass('modal-menu-open')) {
      $('.modal-menu-close').click();
    }
  });

  // header menu search
  $('.header-menu-search-open').click(function(){
    $(this).addClass('true');
    $('body').addClass('open-search');
    $('.header-menu-search').addClass('input-focus-true').find('input[type="text"]').focus();
  });
  $('.header-menu-search input[type="submit"]').click(function(){
    if($(this).parents('.header-menu-search').hasClass('input-focus-true')){
      if ($('.header-menu-search input[type="text"]').val() == '') {
        $('.header-menu-search-open').removeClass('true');
        $('.header-menu-search').removeClass('input-focus-true');
        $('body').removeClass('open-search');
        return false;
      }
    }
  });
  $('.menu-search-close').click(function(){
    $('.header-menu-search-open').removeClass('true');
    $('.header-menu-search').removeClass('input-focus-true');
    $('body').removeClass('open-search');
  });


  // on main forbes-life and -woman max height first elements
  if ( $('.main-life-woman').length != 0){
    function runMaxHeight(){
      var nameFunction = arguments.callee.name;
      var massHeight = [];
      var $blocks = $('.main-life-woman .col-left .item-material:lt(2), .main-life-woman .col-right .item-material:lt(2)');
      $blocks.each(function(indx){
        massHeight.push($(this).outerHeight());
      });
      massHeight.max = function(){
        return Math.max.apply( Math, this );
      };
      var maxHeight = massHeight.max();
      $blocks.each(function(indx){
        $(this).css('min-height',maxHeight + 'px').attr('data-function',nameFunction);
      });
    }
    if (dWidth > 560) {
      //$('.main-life-woman .col-left .item-material:lt(2) img, .main-life-woman .col-right .item-material:lt(2) img').load(function () {
      //  runMaxHeight();
      //});
      setTimeout(function(){
        runMaxHeight();
      },1500);
    }
  }


  // on main actual-news max height the first two elements
  if ( $('body').hasClass('front') && $('.actual-news').length != 0 && isMobile == true && dWidth > 736 ){
    var dHeight = (window.innerHeight > 0) ? window.innerHeight : screen.Height;
    function maxHeightActualNewsItem(){
      setTimeout(function(){
        var $dai = $('.drum .actual-news .item-news');
        var dai1 = $dai.eq(0).outerHeight();
        var dai2 = $dai.eq(1).outerHeight();
        var massHeight = [dai1,dai2];
        massHeight.max = function(){
          return Math.max.apply( Math, this );
        };
        var maxHeight = massHeight.max();
        $('.drum .actual-news .item-news:lt(2)').css({
          'height' : maxHeight + 'px'
        });
      },100);
    }
    var mql = window.matchMedia("(orientation: portrait)");
    if(mql.matches) {
      // portrait
      if (dWidth < 1024) {
        maxHeightActualNewsItem();
      }
    }
    mql.addListener(function(m) {
      if(m.matches) {
        // Changed to portrait
        if (dHeight <= 1024) {
          maxHeightActualNewsItem();
        }
      } else {
        // Changed to landscape
        if (dHeight <= 1024) {
          $('.drum .actual-news .item-news:lt(2)').css({
            'height' : 'auto'
          });
        }
      }
    });
  }

  //Our Brands
  if (isMobile == true) {
    $('.block-choice').click(function(){
      var bl = $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display');
      if (bl != 'block') {
        $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display','block');
      } else {
        $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display','none');
      }
    });
  }


  // right banner on main page
  function motionsBnrOnMainPage(){
    var $blBn = $('.block-bnr-in-text')[0];
    if ($blBn != undefined && $('body').hasClass('not-front')!=true) {
      var $blockBnrInTextBn = $('.block-bnr-in-text .bn');
      var hMHeight = $('.header-menu').outerHeight();
      var numberIndent = 20;
      $(document).scroll(function () {
        var mainSectionListPB = parseInt($('.main-section-list').css('padding-bottom'));
        (isNaN(mainSectionListPB)) ? mainSectionListPB = 60 : mainSectionListPB = mainSectionListPB;

        var blBnOffsetTop = $('.block-bnr-in-text').offset().top - hMHeight - numberIndent;
        if ($('.article-top').length != 0) {
          $('.block-bnr-in-text').css('height', $('.article-top').height() + 'px');
        }
        if ($('.drum-brandvoice') != 0){
          if ($('.block-href-material').height() <= 600 && $('.block-bnr-in-text .bn').height() >= 600) {
            $('.block-bnr-in-text').css('height', '600px');
          }
        }
        var Ra = $blBn.getBoundingClientRect();
        var R = Ra.bottom - $blockBnrInTextBn.height() - mainSectionListPB - numberIndent;
        if (dWidth > 560){
          if ($(document).scrollTop() >= blBnOffsetTop) {
            if (R < 0) {
              if (!$blockBnrInTextBn.hasClass('fix-bttm')){
                $blockBnrInTextBn.removeClass('fix no-fix').addClass('fix-bttm').css({
                  'position' : 'absolute',
                  'z-index' : '',
                  'top' : 'auto',
                  'bottom' : '0px'
                });
              }
            } else {
              if (!$blockBnrInTextBn.hasClass('fix')){
                $blockBnrInTextBn.addClass('fix').removeClass('fix-bttm no-fix').css({
                  'position' : 'fixed',
                  'z-index' : ($('.header-menu').css('z-index') - 1),
                  'top' : (hMHeight + numberIndent) + 'px',
                  'bottom' : 'auto'
                });
              }
            }
          } else {
            if (!$blockBnrInTextBn.hasClass('no-fix')){
              $blockBnrInTextBn.removeClass('fix fix-bttm').addClass('no-fix').css({
                'position' : '',
                'z-index' : '',
                'top' : '',
                'bottom' : ''
              });
            }
          }
        }
      });
    }
  }
  if($('body').hasClass('infinity-page') != true){
    motionsBnrOnMainPage();
  }


  // main gallery
  // http://kenwheeler.github.io/slick/
  function onMainGallery() {
    var $galleryBlock = $('.main-gallery');
    $galleryBlock.slick({
      infinite: true,
        //variableWidth: true,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<div class="slick-prev" title="назад"></div>',
        nextArrow: '<div class="slick-next" title="вперед"></div>',
        responsive: [
      {
        breakpoint: 788,//ширина экрана, от которой параметры изменятся
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          draggable: true
        }
      },
      {
        breakpoint: 580,//ширина экрана, от которой параметры изменятся
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          infinite: true,
          draggable: true
        }
      }
      ]
    }).addClass('show');
  }


  // block-ratings gallery
  // http://kenwheeler.github.io/slick/
  function onBlockRatingsGallery(nodeIndx) {
    var contentAddon = nodeIndx<0 ? '' : '.screen-'+nodeIndx;
    var $galleryBlock = $('.content'+contentAddon+' .ratings-gallery');
    $galleryBlock.each(function(indx, element) {
      if ($galleryBlock.eq(indx).hasClass('show') != true) {
        $galleryBlock.eq(indx).slick({
            infinite: true,
            draggable: false,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-prev" title="назад"></div>',
            nextArrow: '<div class="slick-next" title="вперед"></div>'
        }).addClass('show');
      }
    });
    $galleryBlock.attr('data-function', arguments.callee.name);
  }


  // слайдер рейтингов на главной странице
  function renderingScrollIndicator(thisClass){
    var $slider = $('' + thisClass + '');
    $slider.after('<div class="indicator" data-function="' + arguments.callee.name + '"><div class="scroll-bar"></div></div>');
    var slWidth = $slider[0].scrollWidth - $slider.outerWidth();
    var $scrollBar = $slider.next('.indicator').find('.scroll-bar');
    $slider.scroll(function() {
      var sl = $(this).scrollLeft();
      var indicatorWidth = $slider.next('.indicator').width();
      var scrollBarWidth = $scrollBar.width();
      var sLDPercent = parseInt(100 * sl / slWidth);
      sLDPercent = (indicatorWidth - scrollBarWidth) * sLDPercent / 100;
      $scrollBar.css('left', sLDPercent + 'px');
    });
  }
  // http://kenwheeler.github.io/slick/
  function ratingOnMainPageSlider() {
    var $galleryBlock = $('.romp-for-desktop');
    if ($galleryBlock.length != 0){
      $galleryBlock.slick({
        infinite: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<div class="slick-prev" title="назад"></div>',
        nextArrow: '<div class="slick-next" title="вперед"></div>',
        responsive: [
          {
            breakpoint: 560,
            settings: 'unslick'
          }
        ]
      }).addClass('show').attr('data-function',arguments.callee.name);
      $('.romp-slider').removeAttr('data-slick');
    }
  }
  $('.romp-for-desktop').on('destroy', function(event, slick){
    renderingScrollIndicator('.romp-slider');
    $('.romp-slider').attr('data-slick','destroy');
    $('.rating-on-mainpage .indicator').after($('.romp-head .href-all').clone());
  });
  var $rompSlider = $('.romp-slider');
  var rompSliderWidth = $rompSlider.outerWidth();
  $(window).resize(function() {
    if (rompSliderWidth != $rompSlider.outerWidth()) {
      rompSliderWidth = $rompSlider.outerWidth();
      var newDWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      if (newDWidth > 560 && $rompSlider.attr('data-slick') != undefined){
        $rompSlider.next('.indicator').remove();
        $rompSlider.next('.href-all').remove();
        ratingOnMainPageSlider();
      }
    }
  });
  ratingOnMainPageSlider();


  //слайдер блока Взлёты и падения на главной странице
  //http://kenwheeler.github.io/slick/
  function sliderUpsAndDowns() {
    var $sliderUpBlock = $('.uad-slider-up');
    if ($sliderUpBlock.length != 0){
      $sliderUpBlock.slick({
        infinite: true,
        adaptiveHeight: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        prevArrow: '<div class="slick-prev" title="назад"></div>',
        nextArrow: '<div class="slick-next" title="вперед"></div>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    draggable: true,
                    asNavFor: null
                }
            },
            {
                breakpoint: 665,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    draggable: true,
                    asNavFor: null
                }
            },
            {
                breakpoint: 561,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  draggable: true,
                  asNavFor: null
                }
            },
            {
                breakpoint: 374,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    asNavFor: null
                }
            }
        ]
      }).addClass('show').attr('data-function',arguments.callee.name);

      $('.uad-wrap-sliders .arrow-left').click(function(){
        $('.uad-wrap-sliders .slick-prev').click();
      });
      $('.uad-wrap-sliders .arrow-right').click(function(){
        $('.uad-wrap-sliders .slick-next').click();
      });
    }
  }
  sliderUpsAndDowns();
  function showUadPopup(e,thisBlock){
    var $uadPopup = $('.uad-popup'),
        thisRating = thisBlock.find('.uad-popup-date .rating').text(),
        thisState = thisBlock.find('.uad-popup-date .state').text(),
        thisChange = thisBlock.find('.uad-popup-date .change').text(),
        thisHrefNode = thisBlock.find('.uad-popup-date .href-node').text(),
        thisUpOrDown = thisBlock.find('.uad-popup-date .up-or-down').text();
    if (e == 'mouseover') {
      $uadPopup.find('.rating').text(thisRating);
      $uadPopup.find('.state').text(thisState);
      $uadPopup.find('.change').text(thisChange);
      $uadPopup.find('.href-node').attr('href',thisHrefNode);
      $uadPopup.removeClass('show up down');
      $uadPopup.css({
        'top' : (thisBlock.offset().top - $('.ups-and-downs').offset().top - ($uadPopup.outerHeight()/2) - 25) + 'px',
        'left': (thisBlock.offset().left - $('.ups-and-downs').offset().left - ($uadPopup.outerWidth()/2 - thisBlock.outerWidth()/2)) + 'px'
      }).addClass('show '+thisUpOrDown);
      $uadPopup.hover(
        function(){
          $(this).addClass('show ');
        },
        function(){
          $uadPopup.removeClass('show ');
        }
      );
    } else {
      $uadPopup.removeClass('show');
    }
  }
  if ($('.ups-and-downs').length != 0) {
    if (isMobile != true){
      $('.uad-wrap-sliders .item').hover(
        function(){
          showUadPopup('mouseover',$(this));
        },
        function(){
          showUadPopup('mouseout',$(this));
        }
      );
    } else {
      $('.uad-wrap-sliders .item').click(function(){
        showUadPopup('mouseover',$(this));
      });
      $('.uad-wrap-sliders .slick-prev, .uad-wrap-sliders .slick-next').click(function(){
        $('.uad-popup').removeClass('show');
      });
      $(document).mouseup(function (e){ // событие клика вне слайдера
        var div = $('.uad-wrap-sliders');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          $('.uad-popup').removeClass('show');
        }
      });
    }
  }


  // слайдер блока Мнения на главной странице
  if ( $('.opinions-on-mainpage').length != 0 && dWidth <= 768){
    function renderScrollBarOpinionOnMainPage(){
      $('.opinions-omp-author-material').after('<div class="hide-scrollbar"></div>');
      renderingScrollIndicator('.opinions-omp-author-material');
      $('.opinions-omp-author-material + .indicator').attr('data-function',arguments.callee.name);
    }
    renderScrollBarOpinionOnMainPage();
  }

  function opinionsOmpShowMore(){
    if(isMobile != true){
      $('.opinions-omp-show-more a').click(function(){
        if( $(this).attr('data-more') == undefined){
          $(this).attr('data-more','true');
          $('.opinions-omp-rest-material,.opinions-omp-author-material').addClass('show-more');
          return false;
        }
      });
      $('.opinions-omp-show-more').attr('data-function',arguments.callee.name);
    }
  }
  opinionsOmpShowMore();

  // .main-video-block на главной странице
  if( $('.main-video-block').length != 0 && isMobile == false ) {
    function mvbColumnFirstHrefHeight(){
      var $block = $('.mvb-column');
      var hrefFirst  = $block.eq(1).find('.href:first').height(),
        hrefSecond = $block.eq(2).find('.href:first').height();
      if (hrefFirst > hrefSecond) {
        $block.eq(1).find('.href:first').css('min-height', hrefFirst + 'px');
        $block.eq(2).find('.href:first').css('min-height', hrefFirst + 'px');
      } else {
        $block.eq(1).find('.href:first').css('min-height', hrefSecond + 'px');
        $block.eq(2).find('.href:first').css('min-height', hrefSecond + 'px');
      }
      $block.eq(1).find('.href:first').attr('data-function', arguments.callee.name);
      $block.eq(2).find('.href:first').attr('data-function', arguments.callee.name);
    }
    setTimeout(mvbColumnFirstHrefHeight,1000);
  }
  // слайдер видео на главной странице
  // http://kenwheeler.github.io/slick/
  function sliderVideoOnMainPage() {
    var $galleryBlock = $('.main-video-slider');
    $galleryBlock.slick({
      infinite: true,
      variableWidth: false,
      draggable: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<div class="slick-prev" title="назад"></div>',
      nextArrow: '<div class="slick-next" title="вперед"></div>',
      responsive: [
        {
          breakpoint: 788,//ширина экрана, от которой параметры изменятся
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            draggable: true
          }
        },
        {
          breakpoint: 580,//ширина экрана, от которой параметры изменятся
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            infinite: true,
            draggable: true
          }
        }
      ]
    }).addClass('show').attr('data-function', arguments.callee.name);
  }
  sliderVideoOnMainPage();


  // слайдер BrandVoice главной странице
  // http://kenwheeler.github.io/slick/
  function sliderBrandVoiceOnMainPage() {
    var $galleryBlock = $('.slide-brand-voice');
    $galleryBlock.slick({
      //initialSlide: 0, //Slide to start on
      infinite: true,
      variableWidth: false,
      adaptiveHeight: false,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow: '<div class="slick-prev" title="назад">предыдущий бренд</div>',
      nextArrow: '<div class="slick-next" title="вперед">следующий бренд</div>',
      responsive: [
        {
          breakpoint: 788,
          settings: {
            draggable: true
          }
        },
        {
          breakpoint: 580,
          settings: {
            dots: false,
            adaptiveHeight: true,
            prevArrow: '<div class="slick-prev" title="назад"></div>',
            nextArrow: '<div class="slick-next" title="вперед"></div>'
          }
        }
      ]
    }).addClass('show').attr('data-function', arguments.callee.name);
  }
  $('.slide-brand-voice').on('init reInit', function(event, slick){
    if(slick.options.adaptiveHeight == false){
      setTimeout(function(){
        $('.sbv-item.slick-slide').css('min-height', slick.listHeight + 'px');
      },100);
    }
  });
  sliderBrandVoiceOnMainPage();



  // слайдер Сюжет
  // http://kenwheeler.github.io/slick/
  function onMainGallerySuzhet() {
    var $galleryBlock = $('.suzhet-slider');
    $galleryBlock.slick({
      infinite: true,
      draggable: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-prev" title="назад"></div>',
      nextArrow: '<div class="slick-next" title="вперед"></div>',
      responsive: [
        {
          breakpoint: 788,
          settings: {
            infinite: true,
            draggable: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  $('.suzhet-slider').on('init', function(event, slick){
    var $this = $(this);
    if ($this.find('.slick-arrow').length == 0){
      $this.addClass('no-arrow');
    }
    $this.parents('.suzhet').addClass('show');
    setTimeout(function(){
      if(slick.options.adaptiveHeight != true){
        var thisBlockHeight = event.currentTarget.clientHeight;
        if (thisBlockHeight > 69){
          $this.find('.suzhet-item-material').each(function(indx, element){
            $(element).css('height',thisBlockHeight + 'px');
          });
        }
      }

      if ($('.header-menu .suzhet').length != 0){
        var eCtCh = event.currentTarget.clientHeight;
        // Появление и скрытие блока Сюжет в статьях
        var tempTop, curTop = 0;
        $(window).scroll(function(){
          var indentTop = tbh + $('.header-menu').outerHeight(true) + eCtCh;
          curTop = $(window).scrollTop();
          if (tempTop < curTop && curTop >= indentTop ){
            //scrolling down
            $('.header-menu .suzhet').removeClass('true');
            $('.shares').css('top', '');
          } else if (tempTop > curTop ){
            //scrolling up
            if (curTop < indentTop) {
              $('.header-menu .suzhet').removeClass('true');
              $('.shares').css('top', '');
            } else {
              $('.header-menu .suzhet').addClass('true');
              $('.shares').css({
                'top': ($('.suzhet').height() + $('.header-menu').outerHeight() + 20) + 'px'
              });
              /*if (dWidth > 768 ) {
                $('.read-also.fix').css({
                  'height' : ($('.read-also').height() - eCtCh) + 'px',
                  'top' : (parseInt($('.read-also').css('top')) + eCtCh) + 'px'
                });
              }*/
            }
          }
          tempTop = curTop;
        });
      }
    },250);
  });
  if($('.suzhet').length != 0){
    onMainGallerySuzhet();
  }


  // dark theme
  if(mob == false && ($('.forbes-dark-theme').length != 0 || $('.forbes-profile-dark').length != 0)){
    $('.under-menu,.header-menu').addClass('dark-theme');
    $('.header-menu-wrap-js').addClass('header-menu-wrap--bg-white');
  }


  // постобработка материала после подгрузки - баннеры, галереи и пр
  // http://manos.malihu.gr/jquery-custom-content-scroller/
  function motionsOnPage(indx){
    //Вас также может заинтересовать
    onAlsoInterestedGallery();

    // движения баннера справа и блока "читать также" слева
    /*if ($('body').attr('data-first-read-also') == '0') {
      $('.read-also').eq(0).css({
        'height' : ($(window).height() - tbh - $('header').outerHeight()) + 'px'
      });
      $('.read-also').eq(0).find('.read-also-block-href').css({
        'height' : ($(window).height() - tbh - $('header').outerHeight() - $('.content .soc-seti').outerHeight()) + 'px'
      });
      $('body').attr('data-first-read-also','1');
    }
    $('.content').each(function(indx, element){
      var i = $(element).attr('class');
      var elClassName = '.' + i.slice(i.indexOf(' ') + 1);

      $(elClassName + ' .col-left').css({
        'height' : $(elClassName + ' .col-center-in').outerHeight() + 'px'
      });

      var $blBnInText = $('.block-bnr-in-text')[indx];
      var $blLc = $('.content')[indx];
      //$('.fake-body').eq(indx).css('height',$(''+elClassName+'').innerHeight() + 'px');
      $(document).scroll(function () {
        // читать также слева
        $(elClassName + ' .col-left').css({
          'height' : $(elClassName + ' .col-center-in').outerHeight() + 'px'
        });
        var socSetiContent = $(elClassName + ' .soc-seti-content').outerHeight() + $(elClassName + ' .soc-seti-content').next().innerHeight();
        var Ra = $blBnInText.getBoundingClientRect();
        //var hMHeight = $('.header-menu').outerHeight() + suzhetHeight;
        var hMHeight = $('.header-menu').outerHeight();
        if ($('body').hasClass('admin-menu')) {
          hMHeight = hMHeight + adminMenuHeight;
        }
        var La = $blLc.getBoundingClientRect();
        if (Ra.top - hMHeight <= 0) { // соц сети
          $(elClassName + ' .soc-seti-content').show();
          $(elClassName + ' .read-also').addClass('soc');
          $(elClassName + ' .col-center-in .shares').css('opacity','0');
          $(elClassName + ' .read-also-block-href').css({
            'height' : ($(window).height() - socSetiContent - $('.header-menu').outerHeight()) + 'px'
          });
        } else {
          $(elClassName + ' .soc-seti-content').hide();
          $(elClassName + ' .read-also').removeClass('soc');
          $(elClassName + ' .col-center-in .shares').css('opacity','1');
        }
        var bnLeftHeight  = $(elClassName + ' .block-bnr-left').height();
        var L = La.bottom - bnLeftHeight - $(window).height();
        if (La.top - hMHeight <= 0) {
          if (L <= 0) {
            $(elClassName + ' .read-also').css({
              'position' : 'absolute',
              'top' : 'auto',
              'bottom' : ($(elClassName + ' .block-bnr-left').height() + 20 ) + 'px'
            }).addClass('stop').removeClass('fix');
          } else {
            //var socSetiHeight = 0;
            //($(elClassName + ' .read-also').hasClass('soc')) ? socSetiHeight = socSetiContent : socSetiHeight = 0;
            $(elClassName + ' .read-also').css({
              'position' : 'fixed',
              'top'      : hMHeight + 'px',
              'bottom'   : '',
              'height'   : ($(window).height() - hMHeight) + 'px'
            }).addClass('fix').removeClass('stop');
            $(elClassName + ' .read-also-block-href').css({
              'height' : ($(window).height() - hMHeight) + 'px'
            });
          }
        } else {
          $(elClassName + ' .read-also').css({
            'position' : 'static',
            'top'      : 'auto',
            'bottom'   : 'auto',
            'height'   : ($(window).height() - La.top) + 'px'
          }).removeClass('fix');
          $(elClassName + ' .read-also-block-href').css({
            'height' : ($(window).height() - La.top) + 'px'
          });
        }

        // баннер справа в тексте
        var articleTopHeight = $(elClassName + ' .article-top').outerHeight();
        var $blockBnrInTextBn  = $(elClassName + ' .block-bnr-in-text .bn');
        var bBnrInTextHeight = $blockBnrInTextBn.height();
        var textIndent = 10;
        var mobBanActive = 0; // движение блока с баннером справа, 0 - да, 1 - нет
        if (isMobile != true || isMobile == true && screen.width >= 768 ) {
          mobBanActive = 0;
        } else {
          mobBanActive = 1;
        }
        if (mobBanActive == 0) {
          if (articleTopHeight > bBnrInTextHeight && bBnrInTextHeight != 0) {
            $(elClassName + ' .block-bnr-in-text').css({
              'height' : articleTopHeight + 'px'
            });//.removeClass('min-height-false');
            if (Ra.top - hMHeight < 0) {
              if (Ra.bottom - bBnrInTextHeight - hMHeight - textIndent < 0) {
                $blockBnrInTextBn.removeClass('fix').css({
                  'position' : 'absolute',
                  'top' : 'auto',
                  'bottom' : '0'
                });
              } else {
                $blockBnrInTextBn.addClass('fix').css({
                  'position' : 'fixed',
                  'top' : (hMHeight + 1) + 'px',
                  'bottom' : 'auto'
                });
              }
            } else {
              $blockBnrInTextBn.removeClass('fix').css({
                'position' : '',
                'top' : '',
                'bottom' : ''
              });
            }
          }
        }
      });

    });*/


    //чтобы работали галереи в подгружаемых мат-х
    gallery(indx);
    onBlockRatingsGallery(indx);
  }

  //пересчитываю позиции
  function recalculateInfinityTopNHeight() {
    $('.content').each(function(i, item){
      var $item = $(item);
      for(var indx in window.infinity_scroll) {
        var divClass = 'screen-'+indx;
        if(!$item.hasClass(divClass)) { continue; }
        var posit = getInfinityTopNHeight($item);
        window.infinity_scroll[indx].top = posit.top;
        window.infinity_scroll[indx].height = posit.height;
      }
    });
  }


  //очищаю верхние материалы
  function clearTopInfMaterials() {
    var topNow = $(document).scrollTop();

    for(var indx in window.infinity_scroll) {
      var item = window.infinity_scroll[indx];

      if ((indx <= (window.infinity_scroll_pointer - 2)) && item.enabled) {
        $('.screen-' + indx).html('').remove();
        $('.page_addon-' + indx).html('').remove();
        $('.top-bn-'+indx).html('').remove();
        $(document).scrollTop(topNow - item.height);
        window.infinity_scroll_download_init[indx] = 0;
        item.top = 0;
        item.height = 0;
        window.infinity_scroll[indx].enabled = false;
      }
    }

    //удаляю хвост
    for(var indx=window.infinity_scroll.length-1; indx>=0; indx--) {
      if((indx>(window.infinity_scroll_pointer-(-2)))) {
        $('.screen-'+indx).html('').remove();
        $('.page_addon-'+indx).html('').remove();
        $('.cover-'+indx).html('').remove();
        $('.top-bn-'+indx).html('').remove();
        window.infinity_scroll_download_init[indx] = 0;
        window.infinity_scroll.splice(indx, 1);
      }
    }

    recalculateInfinityTopNHeight();
  }

  // подгрузка материалов при скролле
  function winScroll() {
    var scrollTop = $(document).scrollTop();

    for(var indx in window.infinity_scroll) {
      startRefreshInfinityElementData(indx);
      var contBlock = window.infinity_scroll[indx];
      var blockTop = contBlock.top;
      var blockHeight = contBlock.height;

      if ( scrollTop > blockTop && (scrollTop < (blockTop - (-1)*blockHeight - 0*0.5*window.winHeight))) {
        var newPointer = indx;
        if (newPointer != window.infinity_scroll_pointer) {
          window.infinity_scroll_pointer = newPointer;
          history.pushState('', '', window.infinity_scroll[newPointer].url);
          window.document.title = window.infinity_scroll[newPointer].title;

          //LentaInform - Размещение дополнительного счетчика
          lentaInformPixel();

          clearTopInfMaterials();

          if (window._mediator) {
            window._mediator.stop();
            console.log('mediator stopped in winScroll');
            window._mediator.start({ // запускаем модуль с новыми параметрами
              article: $('.screen-' + indx + ' .js-mediator-article'),
              url: $('.screen-' + indx).attr('data-url')
            });

            // Обновляем перетяжку
            //const $bannerTop = $('div.screen-' + indx + '').parent('body').find('[data-banner-type="top-header"]').attr('id');
            //window.Ya.adfoxCode.reload($bannerTop);
            console.log('mediator started with article = .screen-' + indx + ' .js-mediator-article | url = ' + $('.screen-' + indx).attr('data-url'));
          }
        }
      }

      // для мобильной версии, появления блока соц кнопок
      if (isMobile != false) {
        if ( scrollTop > blockTop && scrollTop < blockTop + blockHeight ) {
          $('.content .shares').removeClass('true');
          $('.content.screen-' + newPointer + ' .shares').addClass('true');
        }
      }

      // затемнение слайда
      var $blCov = $('.cover-'+indx);
      if($blCov.length) {
        var blCov = $blCov[0];
        var Ca = blCov.getBoundingClientRect();
        if ((Ca.top - window.hMHeight > window.hMHeight) && (Ca.top < window.winHeight)) {
          var opacity = ('.' + Math.floor(Ca.top * 100 / $(window).height())).slice(0, 2);
          $blCov.css({ 'opacity': opacity });
          if(!$blCov.hasClass('true')) {
            $blCov.removeClass('false').addClass('true');
          }
        } else {
          if(!$blCov.hasClass('false')) {
            $blCov.css({ 'opacity': '0' }).removeClass('true').addClass('false');
          }
        }
      }
    }

    var lastIndx = window.infinity_scroll.length-1;
    var currentTop = $(document).scrollTop();
    //полтора экрана вниз будет новый материал
    var topLimit = window.infinity_scroll[lastIndx].top - (-1)*window.infinity_scroll[lastIndx].height - 3*window.winHeight;
    if(!window.infinity_scroll_download_init[window.infinity_scroll.length] && currentTop >= topLimit) {
      window.infinity_scroll_download_init[window.infinity_scroll.length] = 1;
      addNewContent();
    }

    var currItem = window.infinity_scroll[window.infinity_scroll_pointer];
    var prevIndx = window.infinity_scroll_pointer - 1;
    topLimit = currItem.top - (-2)*window.winHeight;
    if(prevIndx>=0 && !window.infinity_scroll[prevIndx].height && !window.infinity_scroll_download_init[prevIndx]
          && (currentTop < topLimit) ) {
      window.infinity_scroll_download_init[prevIndx] = 1;
      addOldContent(prevIndx);
    }

  }



  function infinityPage() {
    if ( !$('body').hasClass('infinity-page') ) {
      onAlsoInterestedGallery(); //походу, этого блока нет, можно, в принципе, грохнуть
      onBlockRatingsGallery(-1);
      return;
    }

    //$('body').attr('data-first-read-also','0');
    window.infinity_scroll = [];
    window.infinity_scroll_pointer = 0;
    window.infinity_scroll_download_init = [1];
    window.winHeight = $(window).height();
    window.hMHeight = $('.header-menu').outerHeight();

    var first_cont = $('.content:last');
    addInfinityElement(0, first_cont, window.location.pathname, window.document.title);

    //постобработка материала после подгрузки - баннеры, галереи и пр
    motionsOnPage(0);

    // подгрузка материалов при скролле
    $(document).scroll(function () { winScroll(); });

    // страница сразу вверх (по кнопке Home)
    $(window).keydown(function(eventObject){
      if (eventObject.which == 36) {
        for(var indx in window.infinity_scroll) {
          var inf_block = window.infinity_scroll[indx];
          if(inf_block.enabled){
            history.pushState('', '', inf_block.url);
            window.document.title = inf_block.title;
            window.infinity_scroll_pointer = indx;
            //LentaInform - Размещение дополнительного счетчика
            lentaInformPixel();
            break;
          }
        }
      }
    });

  }

  /*if ( $('body').find('.read-also-block-href').length != 0 && $('body').hasClass('infinity-page') != true ) {
    runMCustomScrollbar(0);
  }*/



  function getInfinityTopNHeight(block) {
    var res = {};
    if(!block || !block.length) return {top:0, height:0};

    res.top = parseInt(block.offset().top.toString().split(/\./)[0]);
    res.height = block.height();
    return res;
  }


  function refreshInfinityElementData(indx, block) {
    if(!block || !block.length){
      block = $('.screen-'+indx);
    }
    var currentScrollItem = getInfinityTopNHeight(block);
    window.infinity_scroll[indx].top = currentScrollItem.top;
    window.infinity_scroll[indx].height = currentScrollItem.height;
  }

  function startRefreshInfinityElementData(indx) {
    if(!window.startInfRefresh) {
      window.startInfRefresh = {};
    }
    if(window.startInfRefresh[indx]) {
      clearTimeout(window.startInfRefresh[indx]);
    }
    window.startInfRefresh[indx] = setTimeout(function(){
      refreshInfinityElementData(indx);
    }, 500);
  }


  function addInfinityElement(indx, block, url, title) {
    if(window.infinity_scroll[indx]) { return; }

    var currentScrollItem = getInfinityTopNHeight(block);
    currentScrollItem.url = url;
    currentScrollItem.title = title;
    currentScrollItem.enabled = true;

    window.infinity_scroll[indx] = currentScrollItem;

    block.addClass('screen-' + indx).attr('data-screen', indx);
    setTimeout(function(){
      refreshInfinityElementData(indx, block);
    }, 1500);
  }


  // добавление нового материала
  function addNewContent(){
    var prev_cont = $('.content:last');
    var lastInfinityIndx = window.infinity_scroll.length-1;

    var url = prev_cont.attr('next-url');
    if (url != '') {
      yaCounter433635.reachGoal('infinity_page');

      $.ajax({
        url: url + '?cut=1',
        success: function(data) {
          var nextPointer = lastInfinityIndx - (-1);
          var newMaterial = $(data);

          $(newMaterial.get().reverse()).each(function(i, element) {
            $el = $(element);
            if($el.hasClass('cover')) $el.addClass('cover-'+nextPointer);
            if($el.hasClass('page_addon')) $el.addClass('page_addon-'+nextPointer);
            if($el.hasClass('top-bn')) $el.addClass('top-bn-'+nextPointer);

            if ($el.hasClass('content')) {
              magnificPopupInit($el);
            }
            prev_cont.after($el);
          });
          //newMaterial.append('<div class="cover-'+nextPointer+'"></div>');
          var last_cont = $('.content:last');
          //prev_cont.after(newMaterial[0]);

          addInfinityElement(nextPointer, last_cont, url, prev_cont.attr('data-next-title'));

          //console.log('window.infinity_scroll', window.infinity_scroll);

          //console.log('height', $(document).height());
          //history.pushState('', '', window.infinity_scroll[nextPointer]['url']);

          motionsOnPage(nextPointer);
          forShortStory();
        }
      });
    }
  }

  function addOldContent(indx) {
    var url = window.infinity_scroll[indx].url;
    if (url != '') {
      yaCounter433635.reachGoal('infinity_page');

      $.ajax({
        url: url + '?cut=1',
        success: function(data) {
          $('header .under-menu').removeClass('dark-theme');
          var topAddon = $('body .top-content-place');
          if(!topAddon.length) {
            $('body header').after('<div class="top-content-place" style="height: 0;"></div>');
            topAddon = $('body .top-content-place');
          }
          var w = $('.content:last').width();
          topAddon.css({'width': w+'px'});

          $($(data).get().reverse()).each(function(i, element) {
              $el = $(element);
              if ($el.hasClass('top-bn') && indx == 0) {
                return;
              }
              topAddon.append($el);
          });
          topAddon.find('.cover').remove();

          var content = topAddon.find('.content');
          var h = content.height();
          content.addClass('screen-'+indx);
          var pos = $(document).scrollTop();
          content.insertAfter(topAddon);
          content.insertAfter($('.cover-'+indx-1));
          topAddon.find('.page_addon').addClass('page_addon-'+indx);

          var banner = topAddon.find('.top-bn');
          banner.addClass('top-bn-' + indx);

          banner.insertAfter($('.cover-'+indx));

          window.infinity_scroll[indx].enabled = true;

          $(document).scrollTop(pos-(-1)*h);

          recalculateInfinityTopNHeight();

          motionsOnPage(indx);
          forShortStory();
        }
      });
    }
  }


  // http://manos.malihu.gr/jquery-custom-content-scroller/
  // read-also альтернативный скроллбар
  /*function runMCustomScrollbar(id){
    if (isMobile != true) {
      $('.content').eq(id).find('.read-also-block-href').mCustomScrollbar({
        theme: 'minimal-dark'
      });
    }
    setTimeout(function(){
      var teasers = $('.content').eq(id).find('.read-also-ads [id ^= "AdFox_banner"]');
      var news_a = $('.content').eq(id).find('.read-also-block-href .mCSB_container a');
      if (isMobile == true) {
        news_a = $('.content').eq(id).find('.read-also-block-href a');
      }
      //[3,4,5,8,9]

      var spam_items = {1:[2,1,0], 3:[6,5,4,3]};
      for(var news_i in spam_items){
        var poses = spam_items[news_i];
        //console.log('a', news_a.eq(news_i));
        for(var j in poses) {
          var pos = poses[j];
          //console.log('t', teasers[pos]);
          if(typeof teasers[pos] != 'undefined') {
            news_a.eq(news_i).after(teasers[pos]);
          }
        }
      }
    }, 1000);
  }*/

  // Вас также может заинтересовать
  function onAlsoInterestedGallery() {
    var alsoInterestedGalleries = $('.content').find('.also-interested-gallery');
    if(!alsoInterestedGalleries.length) return;

    alsoInterestedGalleries.each(function (i, item) {
      var $galleryBlock = $(item);
      if($galleryBlock.has('show')) return;

      $galleryBlock.slick({
        //centerMode: true,
        //centerPadding: '0px',
        infinite: true,
        variableWidth: true,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: '<div class="slick-prev" title="назад"></div>',
        nextArrow: '<div class="slick-next" title="вперед"></div>',
        responsive: [
          {
            breakpoint: 788,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              draggable: true
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              draggable: true,
              prevArrow: '<div class="slick-prev-mob" title="назад"></div>',
              nextArrow: '<div class="slick-next-mob" title="вперед"></div>'
            }
          }
        ]
      }).addClass('show');

      //add adfox
      setTimeout(function(){
        //[3, 5]
        var content = $galleryBlock.closest('.content');
        var teasers = content.find('.also-interested-ads div[id ^= "AdFox_banner"]');
        if (teasers.length > 0) {
          if (teasers[0].innerHTML != '') {
            content.find('.also-interested:eq(0) .also-interested-gallery-item[data-slick-index="2"]').html('').prepend(teasers[0].innerHTML);
            content.find('.also-interested:eq(0) .also-interested-gallery-item[data-slick-index="-2"]').html('').prepend(teasers[0].innerHTML);
          }
          if (teasers[1].innerHTML != '') {
            content.find('.also-interested:eq(0) .also-interested-gallery-item[data-slick-index="4"]').html('').prepend(teasers[1].innerHTML);
            content.find('.also-interested:eq(0) .also-interested-gallery-item[data-slick-index="-4"]').html('').prepend(teasers[1].innerHTML);
          }
        }
      }, 1000);

    });
  }

  // mobile for block also-interested-gallery
  if (isMobile == true && screen.width <= 736) {
    var b = document.getElementsByTagName('body')[0];
    var aigiWidth = Math.round(screen.width/1.7);
    var aigiHeight = Math.round(aigiWidth/1.2);
    b.insertAdjacentHTML('beforeend', '<style>' +
        '.page-node .content .also-interested .also-interested-gallery .also-interested-gallery-item {' +
        'width:' + aigiWidth + 'px;' +
        'height:' + aigiHeight + 'px;' +
        '}' +
        '</style>');
  }

  // show-for-mobile in block read-also for mobile
  $('.content').on('click touchstart', '.show-read-also-for-mobile', function(e){
    e.preventDefault();
    var screenIndex = $(this).parents('.content').attr('data-screen');
    if ($(this).hasClass('true') != true){
      $('body').addClass('open-read-also-for-mobile');
      $('.content[data-screen="' + screenIndex + '"] .col-left').css({
        'left' : '0'
      });
      $('.content[data-screen="' + screenIndex + '"] .col-left .show-read-also-for-mobile').addClass('true');
      $('.cover').eq(parseInt(screenIndex)).css('z-index','-1');
    } else {
      $('.content[data-screen="' + screenIndex + '"] .col-left').css({
        'left' : ''
      });
      $('.content[data-screen="' + screenIndex + '"] .col-left .show-read-also-for-mobile').removeClass('true');
      $('body').removeClass('open-read-also-for-mobile');
      $('.cover').eq(parseInt(screenIndex)).css('z-index','');
    }
  });


  // показывать и скрвывть блок с социальными кнопками при прокрутки страницы
  /*if (isMobile == true && screen.width <= 736) {
    var tempScrollTop, currentScrollTop = 0;
    $(window).scroll(function(){
      currentScrollTop = $(window).scrollTop();
      if (tempScrollTop < currentScrollTop && currentScrollTop >= 62 ){
        //scrolling down
        $('body').addClass('artSocForMobile-true');
      } else if (tempScrollTop > currentScrollTop ){
        //scrolling up
        $('body').removeClass('artSocForMobile-true');
      }
      tempScrollTop = currentScrollTop;
    });
  }*/



  // documentation
  // http://kenwheeler.github.io/slick/
  // Блок галереи на материале
  function gallery(nodeIndx) {
    var contentAddon = nodeIndx<0 ? '' : '.screen-'+nodeIndx;
    var $gallery = $('.content'+contentAddon+' .block-gallery');
    $('.content'+contentAddon+' .block-gallery').each(function(indx, element) {
      var $bigSlickElement = $gallery.eq(indx).find('.big-photo-block');
      var $smallSlickElement = $gallery.eq(indx).find('.small-photo-block');
      var $photoTextElement = $gallery.eq(indx).find('.photo-text-block');
      if ($bigSlickElement.hasClass('show') != true) {
        var slickParams = {
          infinite: false,
          draggable: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          lazyLoad: 'progressive',
          prevArrow: '<div class="slick-prev" title="назад"></div>',
          nextArrow: '<div class="slick-next" title="вперед"></div>',
          asNavFor: $photoTextElement,
          responsive: [
            {
              breakpoint: 788,
              settings: {
                draggable: true
              }
            },
            {
              breakpoint: 580,
              settings: {
                draggable: true,
                prevArrow: '<div class="slick-prev-mob" title="назад"></div>',
                nextArrow: '<div class="slick-next-mob" title="вперед"></div>'
              }
            }
          ]
        };
        if($('body').hasClass('page-forbes-brandvoice-emc')) {
          slickParams.infinite = true;
          slickParams.responsive[0].variableWidth = true;
        }
        $bigSlickElement.slick(slickParams);


        var smallSlickParams = {
          slidesToShow: 8,
          slidesToScroll: 8,
          lazyLoad: 'ondemand',
          variableWidth: true,
          infinite: false,
          draggable: false,
          prevArrow: '<div class="slick-prev"></div>',
          nextArrow: '<div class="slick-next"></div>',
          responsive: [
            {
              breakpoint: 788,
              settings: {
                draggable: true
              }
            },
            {
              breakpoint: 580//,
              //settings: 'unslick'
            }
          ]
        };
        if($('body').hasClass('page-forbes-brandvoice-emc')) {
          smallSlickParams.infinite = true;
          smallSlickParams.slidesToShow = 4;
          smallSlickParams.slidesToScroll = 4;
        }
        $smallSlickElement.slick(smallSlickParams).find('.small-photo-block-item[data-slick-index=0]').addClass('slick-show-slide');

        $photoTextElement.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slickParams.infinite,
          draggable: false,
          adaptiveHeight: true,
          prevArrow: '',
          nextArrow: '',
          responsive: [
            {
              breakpoint: 788,
              settings: {
                draggable: false,
                swipe: false
              }
            }
          ]
        });

        $bigSlickElement.addClass('show');
        $smallSlickElement.addClass('show');
        $photoTextElement.addClass('show');

        $bigSlickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = currentSlide ? currentSlide : 0;
          $smallSlickElement.find('.small-photo-block-item').removeClass('slick-show-slide');
          $smallSlickElement.find('.small-photo-block-item[data-slick-index="' + i + '"]').addClass('slick-show-slide');
          $smallSlickElement.slick('slickGoTo',currentSlide);
        });

        var itemLength = $smallSlickElement.find('.small-photo-block-item').length;
        if (itemLength <= 8){
          var itemElementWidth = $smallSlickElement.find('.small-photo-block-item').outerWidth(true);
          $smallSlickElement.find('.slick-track').css({
            'max-width' : (itemElementWidth * itemLength) + 'px'
          });
        }

        $bigSlickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
          //сменить урл, дёрнуть рекламу и счётчики
          var new_url = window.location.origin + window.location.pathname + '?photo='+ (currentSlide + 1);
          var curr_page = window.location.search;
          curr_page = curr_page.match('photo=([0-9]+)');
          var curr_ph = 1;//номер фото до переключения
          if (curr_page != null) {
            curr_ph = parseInt(curr_page[1]);
          }
          var old_title_part = $smallSlickElement.find('.photo-slick-title').eq(curr_ph-1).html();
          var new_title_part = $smallSlickElement.find('.photo-slick-title').eq(currentSlide).html();
          var new_title = document.title.replace(old_title_part, new_title_part);

          var gall_nid = $(this).parent().attr('data-gall-nid');


          refreshCounters(new_url, new_title, gall_nid);
        });

        // var galleryTop = $(".article-bottom-first").offset().top;
        $gallery.eq(indx).find('.small-photo-block-item').on('click', function(){
          var tag = $(this);
          if(tag.hasClass('second')) {
            // $('html, body').animate({ scrollTop: galleryTop }, 2000)
          }
          var slideIndex = parseInt(tag.attr('data-slick-index'));
          $bigSlickElement.slick('slickGoTo',slideIndex);
          $photoTextElement.slick('slickGoTo',slideIndex);
          $('.small-photo-block-item').removeClass('slick-show-slide');
          tag.addClass('slick-show-slide');
        });

        //var myElement = document.getElementById('gallery-block');
        //var topPos = myElement.offsetTop;

        $gallery.eq(indx).find('.photo-text-block-item .all-material').on('click', function(){
          var tag = $(this);
          var slideIndex = parseInt(tag.attr('data-slick-index'));
          $bigSlickElement.slick('slickGoTo',slideIndex);
          $photoTextElement.slick('slickGoTo',slideIndex);
          $('.small-photo-block-item').removeClass('slick-show-slide');
          $('.small-photo-block-item').eq(slideIndex + 1).addClass('slick-show-slide');
          //$('html,body').stop().animate({ scrollTop: topPos }, 400);
        });
      }
    });
    $(document).resize();//lifehack

    // прокрутка (скролл) к фото
    var dlh = decodeURIComponent(document.location.search);
    if (dlh != '') {
      var myRe = /photo=\d*/;
      if ( myRe.test(dlh) ) {
        var $blGall = $('.content'+contentAddon+' .block-gallery').eq(0);
        var numberPhoto = myRe.exec(dlh)[0].split('=')[1];
        if ($blGall.attr('data-scroll-to') == undefined){
          $blGall.attr('data-scroll-to','true');
          $blGall.find('.small-photo-block-item[data-slick-index="' + (numberPhoto - 1) + '"]').click();
          var mobIndent = 0;
          if (isMobile == true && dWidth <= 414){
            mobIndent = 70;
          }
          setTimeout(function(){
            var marTop = parseInt($blGall.css('margin-top'));
            $(document).scrollTop($blGall.offset().top - $('.header-menu').outerHeight() - mobIndent - (marTop - 2));
          }, 2000);
        }
      }
    }
  }

  //функция сменит урл, обновит счётчики и рекламные коды
  function refreshCounters(newUrl, title, gall_nid) {
    history.pushState('', title, newUrl);

    //counters
    console.log('New tns hit ' + newUrl);
    if(typeof tnsCounterforbes_ru != 'undefined')tnsCounterforbes_ru.hit('forbes_total', newUrl);
    console.log('New ya hit ' + newUrl);
    if(yaCounter433635)yaCounter433635.hit(newUrl);
    console.log('New instat hit ' + gall_nid);
    renderInStatPixel(gall_nid);

    //ga('set', { page: newUrl, title: title });
    //ga('send', 'pageview');

    // Reload adfox.
    timestamp = localStorage.getItem('gall_ads_timestamp');
    if (timestamp == null) {
      timestamp = new Date().getTime() / 1000 | 0;
      localStorage.setItem('gall_ads_timestamp', timestamp);
    }
    var now = new Date().getTime() / 1000 | 0;
    var delta = now - timestamp;
    if (delta > 10) {
      //if(window.ADFOX) window.ADFOX.RELOAD_CODE.reloadBanners();//убрать
      //if(window.Ya) window.Ya.adfoxCode.reload();//оставить

      var top_300_id = $('div.content[data-nid="'+gall_nid+'"] [data-banner-type="top_300"]').attr('id');
      var bottom_300_id = $('div.content[data-nid="'+gall_nid+'"] [data-banner-type="bottom_300"]').attr('id');
      //var middle_690_240_id = $('div.content[data-nid="'+gall_nid+'"] [data-banner-type="middle_690_240"]').attr('id');
      //var bg_id =  $('[data-banner-type="bg"]').attr('id');
      if(mob == true) {
        var header_id = $('div.content[data-nid="'+gall_nid+'"]').prev().prev().find('[data-banner-type="top-header-mob"]').attr('id');
      } else {
        var header_id = $('div.content[data-nid="'+gall_nid+'"]').prev().prev().find('[data-banner-type="top-header"]').attr('id');
      }

      if (top_300_id) {
        if(window.Ya) window.Ya.adfoxCode.reload(top_300_id);
      }
      if (bottom_300_id) {
        if(window.Ya) window.Ya.adfoxCode.reload(bottom_300_id);
      }
      // if (middle_690_240_id) {
      //   if(window.Ya) window.Ya.adfoxCode.reload(middle_690_240_id);
      // }
      // if (bg_id) {
      //   if(window.Ya) window.Ya.adfoxCode.reload(bg_id);
      // }
      if (header_id) {
        if(window.Ya) window.Ya.adfoxCode.reload(header_id);
      }

      console.log('Banners reloaded');

      localStorage.setItem('gall_ads_timestamp', now);
    }
  }


  //пейджер внутри материала
  $('body').on('click', '.pagination-item', function(){
    var page = $(this).attr('data-number');
    $(this).parents('.content').find('.body-page').hide();
    $(this).parents('.content').find('.body-part-top .body-page').eq(page - 1).show();
    $(this).parents('.content').find('.body-part-bottom .body-page').eq(page - 1).show();
    $('.pagination-item').removeClass('active');
    $(this).addClass('active');
    var topC = $(this).parents('.content').offset().top;
    $('html,body').animate({ scrollTop: topC }, 300);
  });
  $('body').on('click','.further', function(){
    var curr_page = $(this).parents('.pagination').find('.active').attr('data-number');
    if (curr_page == $(this).parents('.pagination').find('.pagination-item').length) {
      return false;
    } else {
      var next = parseInt(curr_page) + 1;
      $(this).parents('.pagination').find('.pagination-item').eq(next-1).click();
    }
  });


  // появление кнопки "Наверх"
  if ( $('.page-node').length != 0 && isMobile == false ){
    var $upButtonPage = $('.up-button-page');
    var cWidth = $('.content-in').width();
    var wWidth = $(window).width();

    function rightUpBuutonPage(){
      $upButtonPage.css({
        'right' : ((wWidth - cWidth)/2) + 'px'
      });
    }
    rightUpBuutonPage();

    $(window).resize(function(){
      rightUpBuutonPage();
    });

    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      var wHeight = $(window).height();
      if (wScroll > wHeight/2){
        $('.up-button-page').addClass('true');
      } else {
        $('.up-button-page').removeClass('true');
      }
    });

    $upButtonPage.click(function(){
      if ($(this).hasClass('true')){
        yaCounter433635.reachGoal('to_top');
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      }
    });
  }


  // страница Видео
  if ($('.block-page-video').length != 0){
    var VideoBigImg = document.getElementById('big-img-block-page-video');
    function onPageVideoCustomScrollbar(){
      var VideoBigImgHeight = VideoBigImg.height;
      var VideoFreshVideoName = $('.block-page-video').find('.fresh-videos .name').outerHeight();
      $('.fresh-videos').addClass('true');
      $('.fresh-videos .block-href').css({
        'height' : (VideoBigImgHeight - VideoFreshVideoName)  + 'px'
      });
      $('.block-page-video').find('.fresh-videos .block-href').mCustomScrollbar({
        theme: 'minimal-dark'
      });
    }
    onPageVideoCustomScrollbar();
    VideoBigImg.addEventListener('load', onPageVideoCustomScrollbar);
    //VideoBigImg.onload = onPageVideoCustomScrollbar();
  }


  // страница Результатов Поиска
  $('.ap-solr-filter .link-sort').click(function(){
    var thisAttr = $(this).attr('data-sort-by');
    if ($(this).hasClass('active-link') != true) {
      $('.block-page-search form input[name="sort_by"]').val(thisAttr);
      $('.block-page-search form').submit();
    }
    return false;
  });


  // страница 404 или 403
  if( $('.four-hundred-four').length != 0) {
    $('body').addClass('four-0-four');
  }


  // страница Популярное на forbes.ru
  if( $('.page-popular').length != 0 && $(window).width() <= 560) {
    var $bar = $('.block-authors-rating');
    $('.main-section-list.popular').append($bar);
  }


  // В подвале странице Our Brands в мобильной версии и таблет
  if (isMobile == true) {
    $('.acmg-button-footer .block-choice-open').addClass('false');
    $('.acmg-button-footer .block-choice.in').click(function(){
      var bco = $(this).parent('.block-choice-open').css('display');
      if (bco == 'block'){
        $(this).parent('.block-choice-open').addClass('false').removeClass('true');
      } else {
        $(this).parent('.block-choice-open').addClass('true').removeClass('false');
      }
    });
    $('.acmg-button-footer .block-choice.top').click(function(){
      var tnd = $(this).next().css('display');
      if (tnd == 'none'){
        $(this).next().addClass('true').removeClass('false');
      }
    });
  }


  function subscribeThisPage(tag) {
    var email = tag.parent().find('input.email').val();
    var type = tag.attr('data-type');
    var id = tag.attr('data-id');
    var checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('!!!', email, type, id, checkEmail.test(email));
    if(email && checkEmail.test(email) && type && id) {
      console.log('!!! email ok');
      $.ajax({
        type: 'POST',
        url: '/admin/unisender/subscribe',
        data: {
          'email':email,
          'id':id,
          'type':type
        },
        success: function (data) {
          console.log('subscr', data);
          subscribe_unisender_layer(0);
        }
      });
    }
  }


  function subscribe_unisender_layer(show) {
    if(show) {
      $('body').addClass('subscribe-this-page-open');
      $('.subscribe-this-page-bgnd').addClass('show');
      //$('.drum-brandvoice-head-right .bt-blue-mode').hide();
    }else{
      $('body').removeClass('subscribe-this-page-open');
      $('.subscribe-this-page-bgnd').removeClass('show');
      $('.drum-brandvoice-head-right .bt-blue-mode').show();
    }
  }

  function authorInforMoreInit() {
    $('.author-box .more').click(function() {
      $('.author-box .more').hide();
      var textDiv = $('.author-box .about-author .text');
      textDiv.css({height: 'auto'});
      var h = textDiv.height();
      $('.author-box .about-author .text-up').animate({height: h+'px'}, "slow");
    });
  }


  function iframeTotalResize() {
    $('.body-part-top .body-page iframe, .body-part-bottom .body-page iframe, iframe.youtube, iframe.tvigle').each(function(i, item) {
      var frame = $(item);
      if(!frame.attr('id')) {
        var id = 'frame'+Date.now();
        frame.attr('id', id);
        var new_w = frame.closest('div').width();
        var w = frame.attr('width')?frame.attr('width'):frame.width();
        var h = frame.attr('height')?frame.attr('height'):frame.height();
        frame.css('width', new_w+'px');
        var new_w = parseInt(frame.css('width'));
        var prop = new_w / w;
        frame.css('height', parseInt(h * prop))
      }
    });
  }

  function slickAntiCrashRunner() {
      if(scrollSlickAnticrashTimer){
        clearTimeout(scrollSlickAnticrashTimer);
      }
      scrollSlickAnticrashTimer = setTimeout(function () {
          slickAntiCrash();
      }, 1000);
  }


  function slickAntiCrash() {
    var photoBlock = $('.content .article-bottom .photo-text-block');
    if(!photoBlock.length) return;

    var items = photoBlock.find('.photo-text-block-item');
    if(!items.length) return;

    var slickList = photoBlock.find('.slick-list');
    if(slickList.width()>0) return;

    photoBlock.show();
    var w = photoBlock.width();
    var h = 0;
    var totalW = 0;
    items.each(function (i, item) {
        $(item).width(w);
        totalW -= (-1)*w;
        if(!h) h = $(item).height();
    });
    photoBlock.find('.slick-track').width(totalW);
    slickList.height(h);

    console.log('slick patched!');
  }

  //я не знаю, какая херь скрывает этот блок. поиск по вхождению ни черта не дал. просто включаю блок назад
  function showBottomAlsoInterested() {
    $(window).scroll(function(){
        var alsoInterested = $('.also-interested.place-bottom');
        var bottomBody = alsoInterested.parent().find('.body-part-bottom');
        if(bottomBody.height()<30) {
            alsoInterested.hide();
        }else{
            alsoInterested.show();
        }
    });
  }

  // блок Показать Еще на странице материала
  $('body').on('click', '.block-show-more .btn', function(){
    var $thisPrevBlock = $(this).prev('.href-material');
    var thisPrevBlockLength = $thisPrevBlock.find('.item').length;
    if (mob == false) {
      if(!$thisPrevBlock.hasClass('six')){
        $thisPrevBlock.addClass('six');
      } else if($thisPrevBlock.hasClass('six')){
        $thisPrevBlock.removeClass('six');
        $thisPrevBlock.addClass('nine');
        $(this).hide();
      }
    } else {
      if ($(this).attr('data-item') == undefined){
        $(this).attr('data-item',1);
        $thisPrevBlock.find('.item').eq(1).addClass('show');
      } else {
        var thisItem = parseFloat($(this).attr('data-item'));
        if (thisItem < thisPrevBlockLength - 2){
          $thisPrevBlock.find('.item').eq(thisItem + 1).addClass('show');
          $(this).attr('data-item',thisItem + 1);
        } else {
          $thisPrevBlock.find('.item').eq(thisItem + 1).addClass('show');
          $(this).hide();
        }
      }
    }
  });

  function drupalEditorPanels() {
      nodeInListEditorPanels();
      editorPanel();
  }


  function editorPanelDownload(nid, tid, panel, drupalMenu) {
      $.ajax({
          url: '/ajax/menu/' + (nid > 0 ? 'node' + nid : 'term' + tid),
          method: 'GET',
          cache: false,
          dataType: 'json',
          //contentType: "application/json",
          success: function (data) {
              if (!data || data.status != 'ok' || !(data.result)) {
                  return;
              }
              panel.html(data.result.html);
              if (nid > 0) {
                  if(data.result.is_disabled > 0) {
                      $('.content[data-nid="' + nid + '"] h1, .content[data-nid="' + nid + '"] h2').addClass('status-0');
                  }
                  if(data.result.html) {
                      runInviteButtons(nid, panel);
                  }
              }
              if(data.result.drupalMenu) {
                  drupalMenu.html(data.result.drupalMenu);
              }
          }
      });
  }

  function drupalPanelDownload(drupalMenu) {
      if(!drupalMenu.length) return;

      $.ajax({
          url: '/ajax/drupalmenu',
          method: 'GET',
          cache: false,
          dataType: 'json',
          //contentType: "application/json",
          success: function (data) {
              if (!data || data.status != 'ok' || !(data.result)) {
                  return;
              }
              drupalMenu.html(data.result);
          }
      });
  }


  function editorPanel() {
    var panel = $('.editorPanel.node-edition, .editorPanel.term-edition');
    var drupalMenu = $('.drupal-menu');

    var nid = 1*panel.attr('data-nid');
    var tid = 1*panel.attr('data-tid');
    if(!nid && !tid) {
        drupalPanelDownload(drupalMenu);
    }else {
        editorPanelDownload(nid, tid, panel, drupalMenu);
    }

  }

  function nodeInListEditorPanels() {
    var reqvData = {};
    var reqvTag = {};
    var nids = [];

    var editorPanels = $('.node-edition-in-list');
    console.log('node-in-list count', editorPanels.length);
    if(!editorPanels.length) return;

    editorPanels.each(function(i,item) {
        var tag = $(item);
        var nid = 1 * tag.attr('data-nid');
        if (!(nid > 0)) return;
        nids.push(nid);
        if(!reqvTag[nid]) reqvTag[nid] = [];
        reqvTag[nid].push(tag);//материалов может быть по два!
        reqvData[nid] = {};
        reqvData[nid].authors = tag.attr('data-authors');
        reqvData[nid].viewCnt = 1 * tag.attr('data-view-cnt');
    });

    console.log('node-in-list nids', nids);

    if(!(nids.length>0)) return;

    $.ajax({
        url: '/ajax/node-in-list-edit',
        method: 'POST',
        data: {params:reqvData},
        cache: false,
        dataType: 'json',
        //contentType: "application/json",
        success: function(data) {
          console.log('node-in-list data', data);
          if(!data || data.status!='ok' || !(data.result.length>0)) {
            return;
          }
          var domain = data.domain;
          for(var i in data.result) {
            var nodeData = data.result[i];
            var nid = 1*nodeData.nid;
            console.log('tagPanel - data', nid, nodeData);

            for(var j in reqvTag[nid]) {
                var tag = reqvTag[nid][j];
                console.log('tagPanel - tag', tag);
                if(nodeData.viewCnt>0) {
                    tag.append('<span class="users31_count">'+nodeData.viewCnt+' читателей за 31 день после публикации</span>');
                }
                tag.append('<span class="edit_it"><a href="http://admin.'+domain+'/node/'+nid+'/edit?content_lock_token='+nodeData.lockToken+'">Редактировать</a></span>');

            }
          }
        }
    });

  }


  // социальные кнопки в статье
  if (isMobile != true) {
    $('body').on('click', '.shares-dots', function(){
       if (!$('.shares-hide-links').hasClass('.hide')) {
         $('.shares-hide-links').slideDown();
         $(this).hide();
       }
    });
  } else if (isMobile == true && dWidth < 560) {
    $('body').on('click', '.shares-dots', function(){
      if (!$('.shares-hide-links').hasClass('.hide')) {
        $(this).hide();
        $(this).next('.shares-hide-links').removeClass('hide').addClass('show');
        $(this).parents('.sum-and-links-for-mobile').addClass('show').find('.coin-share').hide();
      }
    });
  }


  // короткая статья
  // .for-short-story
  function forShortStory(){
    if (isMobile != true){
    $('.page-node .content-in').each(function(indx, element){
      var $pageNodeContentIn = $('.page-node .content-in').eq(indx);
      if($pageNodeContentIn.attr('data-short-story') == undefined) {
        $pageNodeContentIn.eq(indx).attr('data-short-story','true');
        setTimeout(function(){
            var leftHeight = 0;
            for (var i = 0; i < $pageNodeContentIn.find('.headline > *').length; i++){
              leftHeight += $pageNodeContentIn.find('.headline > *').eq(i).outerHeight();
            }
            // var rightHeight = 0;
            // for (var a = 0; a < $pageNodeContentIn.find('.block-bnr-in-text > *').length; a++){
            //   rightHeight += $pageNodeContentIn.find('.block-bnr-in-text > *').eq(a).outerHeight();
            // }

            var rightHeight = $pageNodeContentIn.find('.block-bnr-in-text').height();
            //console.log('LEFT RIGHT', leftHeight, rightHeight);

            if (rightHeight > leftHeight){
              var nodeCnt = 2-(-1)*Math.round((rightHeight - leftHeight)/140);
              if(lastNodes){
                fillLastNodes($pageNodeContentIn, nodeCnt);
              } else $.ajax({
                url: '/node/last-nodes',
                success: function(data) {
                  lastNodes = data;
                  fillLastNodes($pageNodeContentIn, nodeCnt);
                }
              });
            }
        }, 3000);
      }
    });
    }
  }


  // страница Профиль Миллиардера
  function renderBillionaireGraph(){
    try {
      var aReferenceError = billionaireYearList;
    } catch (e) {
      //console.log(e instanceof ReferenceError);
      aReferenceError = true;
    }
    if (aReferenceError != true) {
      //$('body').addClass('ntpm-true');
      setTimeout(function(){
        $(document).scroll(function () {
          var sclTop = $(document).scrollTop();
          var transformationSpeed = sclTop/2;
          var topBannerHeight = $('.top-bn').height();
          if (topBannerHeight == 0){
            $('.ntpm-bg-wrap .ntpm-bg').css({
              'transform' : 'translate3d(0px, ' + transformationSpeed + 'px, 0px)'
              //'transform' : 'translateY(' + transformationSpeed + 'px)'
            });
          } else {
            if (sclTop > $('.ntpm-bg-wrap').offset().top) {
              var tSpeedModification = (transformationSpeed - topBannerHeight < 0) ? 0 : transformationSpeed - topBannerHeight;
              $('.ntpm-bg-wrap .ntpm-bg').css({
                'transform' : 'translate3d(0px, ' + tSpeedModification/1.9 + 'px, 0px)'
                //'background-position-y' : tSpeedModification/2 + 'vw'
                //'top' : tSpeedModification + 'px'
              });
            } else {
              $('.ntpm-bg-wrap .ntpm-bg').css({
                'transform' : 'translate3d(0px, 0px, 0px)'
                //'background-position-y' : '0vw'
                //'top' : '0px'
              });
            }
          }
        });
      }, 300);
      //console.log(billionaireYearList);

      var arrYear = [];
      for(var index in billionaireYearList) {
        arrYear.push(index);
      }

      function renderColumns(){ // рисуем колонки
        var $blockWhereToInsert = $('.ntpm-graph-body');
        var massYearCoins = [];
        if (isMobile == true) {
          $blockWhereToInsert.append('<div class="for-mobile"></div>');
        }
        for (var i = 0; i < arrYear.length; i++){
          var position   = billionaireYearList[arrYear[i]].position,
              condition  = billionaireYearList[arrYear[i]].value,
              change     = billionaireYearList[arrYear[i]].change,
              upOrDown   = billionaireYearList[arrYear[i]].changePlus;
          switch (upOrDown) {
            case 1:
              upOrDown = 'up';
              break;
            case -1:
              upOrDown = 'down';
              break;
            default:
              upOrDown = 'not-changed';
          }
          if(isMobile == true) {
            $blockWhereToInsert.find('.for-mobile').append('' +
              '<div data-item="' + i + '" class="item" ' +
              'data-upordown="' + upOrDown + '" ' +
              'data-position-rating="#' + position + '" ' +
              'data-condition="' + condition + '" data-coin-change="' + change + '">' +
              '<div class="year">' + arrYear[i] + '</div>' +
              '</div>');
          } else {
          $blockWhereToInsert.append('' +
            '<div data-item="' + i + '" class="item" ' +
              'data-upordown="' + upOrDown + '" ' +
              'data-position-rating="#' + position + '" ' +
              'data-condition="' + condition + '" data-coin-change="' + change + '">' +
              '<div class="year">' + arrYear[i] + '</div>' +
            '</div>');
          }
          var yearCoins = billionaireYearList[arrYear[i]].value.slice(1).split(/\s/g)[0] * 1;
          massYearCoins.push(yearCoins);
        }
        var $itemBlockColumns = $('.ntpm-graph-body .item');
        var widthForMobileBlock = $itemBlockColumns.width()*arrYear.length + parseInt($itemBlockColumns.css('margin-left'))*2*arrYear.length;
        if ($blockWhereToInsert.width() < widthForMobileBlock) {
          $('.ntpm-graph-body .for-mobile, #graph-condition').css('width',widthForMobileBlock + 'px');
          $blockWhereToInsert.addClass('overflow');
          renderingScrollIndicator('.ntpm-graph-body');
        }
        var maxCoins = Math.max.apply(null, massYearCoins);

        for (var a = 0; a < arrYear.length; a++ ){
          var percent = massYearCoins[a]*100/maxCoins + '%';
          $itemBlockColumns.eq(a).css({
            'height' : percent
          });
        }
        function popUpDataItem(thisBlock,paddingTop){
          var paddingTop = paddingTop;
          var thisDataItem = thisBlock.attr('data-item');
          var $itemCircle = $('circle[data-item="' + thisDataItem + '"]');
          $itemCircle.attr('r','5');
          var $popUp = $('.node-type-profile-man .uad-popup');
          $popUp.removeClass('up down not-changed');
          $popUp.css({
            'top': (-$popUp.outerHeight() + paddingTop + Number($itemCircle.attr('cy')) - 20) + 'px',
            'left': (-$popUp.width()/2 + Number($itemCircle.attr('cx'))) + 'px'
          }).addClass(thisBlock.attr('data-upordown') + ' show');
          $popUp.find('.coin.rating').html(thisBlock.attr('data-position-rating'));
          $popUp.find('.coin.state').html(thisBlock.attr('data-condition'));
          $popUp.find('.coin.change').html(thisBlock.attr('data-coin-change'));
        }
        function outsideBlock(thisBlock){
          var $blockPopUp = $('.uad-popup');
          var $graphCondition = $('#graph-condition');
          var thisCX = parseInt($('circle[data-item="' + thisBlock.attr('data-item')  + '"]').attr('cx'));
          $('.css-uad-popup-after').remove();
          if (thisCX-$blockPopUp.width()/2 < 0) {
            $blockPopUp.append('<div class="css-uad-popup-after"><style>.uad-popup:after {left: ' + (thisCX - 7) + 'px;}</style></div>');
            $blockPopUp.css({
              'left' : '1px'
            });
          }
          if ($graphCondition.width() < thisCX+$blockPopUp.width()/2){
            $blockPopUp.append('<div class="css-uad-popup-after"><style>.uad-popup:after {left:auto;right: '
              + ($graphCondition.width()-thisCX - 7) + 'px;}</style></div>');
            $blockPopUp.css({
              'left' : ($graphCondition.width()-$blockPopUp.width()-1) + 'px'
            });
          }
        }
        if (isMobile != true){
          $itemBlockColumns.hover(
            function(){
              popUpDataItem($(this),0);
              outsideBlock($(this));
            },
            function(){
              var thisDataItem = $(this).attr('data-item');
              $('circle[data-item="' + thisDataItem + '"]').attr('r','4');
            }
          );
          $blockWhereToInsert.mouseleave(function(){
            $('.uad-popup').removeClass('show');
          });
        } else {
          $blockWhereToInsert.mouseleave(function(){
            $('.uad-popup').removeClass('show');
          });
          $itemBlockColumns.click(function(){
            var paddingTop = parseInt($blockWhereToInsert.css('padding-top'));
            $('circle[data-item]').attr('r','4');
            popUpDataItem($(this),paddingTop);
            outsideBlock($(this));
          });
        }
      }
      renderColumns();

      function graph(){ // рисуем график
        var $blogWithSvg = $('#graph-condition');
        var gWidth = $blogWithSvg.width();
        var gHeight = $blogWithSvg.height();
        if (isMobile == true) {
          var $blockForMobile = $('.ntpm-graph-body .for-mobile');
          gWidth = $blockForMobile.width();
          gHeight = $blockForMobile.height();
        }
        var $itemBlock = $('.ntpm-graph-body .item');

        var marginLeft = parseInt($itemBlock.css('margin-left'));
        var widthItemBlock = parseInt($itemBlock.css('width'));

        var massX = [];
        var massPosition = [];
        for (var i = 0; i < arrYear.length; i++){
          var x = $itemBlock.eq(i).position().left + marginLeft + widthItemBlock/2;
          massPosition.push(billionaireYearList[arrYear[i]].position);
          massX.push(x);
        }
        var massY = [];
        var maxPosition = Math.max.apply(null, massPosition);
        var range = 0;
        var otstupSverhuSnizu = 0;
        if(isMobile!=true){
          range = gHeight - 30;
          otstupSverhuSnizu = 15;
        } else {
          range = gHeight - 32;
          otstupSverhuSnizu = 16;
        }
        for (var z = 0; z < arrYear.length; z++ ){
          massY.push( parseInt(range/maxPosition*massPosition[z]) + otstupSverhuSnizu );
        }
        var massXY = [];
        for (var a = 0; a < arrYear.length; a++ ){
          massXY.push( massX[a] + ',' + massY[a] );
        }

        function polyLine(){ // рисуем линию
          //<polyline points="0,40 40,40 40,80 80,80 80,120"></polyline>
          var p = {
            'fill':'transparent',
            'stroke':'#FFFFFF',
            'strokeWidth':'3'
          };
          return '<polyline fill="' + p.fill + '" stroke="' + p.stroke + '" stroke-width="' + p.strokeWidth + '" points="' + massXY.join(' ') + '"></polyline>';
        }
        function circle(){ // рисуем точки
          //<circle cx="75" cy="75" r="75" fill="#ED6E46" />
          var ret = '';
          for (var i=0; i<arrYear.length; i++) {
            var c = {
              'cx': massX[i],
              'cy': massY[i],
              'r': '4',
              'fill': 'rgb(48,46,59)',
              'stroke': 'white',
              'strokeWidth': '2'
            };
            ret += '<circle data-item="'+i+'" cx="'+c.cx+'" cy="'+c.cy+'" r="'+c.r+'" fill="'+c.fill+'" stroke="'+c.stroke+'" stroke-width="'+c.strokeWidth+'"></circle>';
          }
          return ret;
        }
        var drawSvg = '<svg width="' + gWidth + '" height="' + gHeight
          + '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
          + polyLine() + circle() + '</svg>';
        $blogWithSvg.html(drawSvg);
      }
      graph();
      $('.ntpm-graph-body').attr('data-function',arguments.callee.name);
    }
  }

  function runInviteButtons(nid, panel) {
    var invitePanel = '<div class="users-invite-panel-'+nid+'">'+
        '<div class="invite-buttons">'+
          '<input class="invite-buttons-this" data-nid="'+nid+'" data-type="build" type="button" value="Пригласить фоторедакторов">'+
           '<input class="invite-buttons-this" data-nid="'+nid+'" data-type="corrector" type="button" value="Пригласить корректоров">'+
           '<br />'+
           '<input class="invite-buttons-this" data-nid="'+nid+'" data-type="parse-share" type="button" value="Пересчитать расшарки в соц сетях">'+
         '</div>'+
         '<div class="result-invite-buttons"></div>'+
      '</div>';
    panel.after(invitePanel);

    $('.users-invite-panel-'+nid+' .invite-buttons-this').click(function () {
        var domainArr = window.location.hostname.split('.');
        domainArr[0] = 'admin';
        var domain = domainArr.join('.');
        var tag = $(this);
        var bType = tag.attr('data-type');
        var bNid = tag.attr('data-nid');
        if (bType == 'parse-share') {
              $.ajax({
                  url: 'https://'+domain+'/admin/parse-node-shares/' + bNid,
                  success: function (data) {
                      $('.result-invite-buttons').html(data);
                  }
              });
        } else {
          $.ajax({
              url: 'https://'+domain+'/admin/workflow/invite-users/' + bType + '/' + bNid,
              success: function (data) {
                  $('.result-invite-buttons').html(data);
              }
          });
        }
        return false;
    });
  }

  function fillLastNodes($pageNodeContentIn, showCnt) {
      var $forShortStory = $pageNodeContentIn.find('.for-short-story');
      $forShortStory.html('<div class="main-section-list"><div class="block-href-material">'+ lastNodes + '</div></div>');

      var $BlockHrefMaterial = $pageNodeContentIn.find('.for-short-story .main-section-list .block-href-material .item-material');
      var massBlockShowMoreA = {};
      $pageNodeContentIn.find('.col-center-in-bottom .block-show-more .href-material a').each(function(indx, element){
        var nid = $(element).attr('data-nid');
        massBlockShowMoreA[nid] = 1;
      });

      var usedCnt = 0;
      $BlockHrefMaterial.each(function(i, item) {
        var tag = $(item);
        var nid = tag.attr('teaser-nid');
        if(massBlockShowMoreA[nid]) return;
        tag.addClass('show');
        usedCnt++;
        if(usedCnt>=showCnt) return false;
      });
      $forShortStory.addClass('show');
  }
/*слайдер native plus-one*/
    $('.other-video-plus-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        prevArrow: '<div class="slick-prev" title="Назад"></div>',
        nextArrow: '<div class="slick-next" title="Вперед"></div>',
        infinite: true,
        responsive: [
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /*слайдер native life-style-main-slider*/
    $('.life-style-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '.life-style-main-slider-top',
        lazyLoad: 'ondemand',
        prevArrow: '<div class="slick-prev" title="Назад"></div>',
        nextArrow: '<div class="slick-next" title="Вперед"></div>',
        infinite: false,
    });
    $('.life-style-main-slider-top').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.life-style-main-slider',
        adaptiveHeight: true,
        arrows: false,
        variableWidth: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        prevArrow: '<div class="slick-prev" title="Назад"></div>',
        nextArrow: '<div class="slick-next" title="Вперед"></div>',
        infinite: false,
        responsive: [
            {
                breakpoint: 421,
                settings: {
                    variableWidth: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }

        ]
    });
    /*слайдер native slider-other-billionaires*/
    $('.slider-other-billionaires').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        prevArrow: '<div class="slick-prev" title="Назад"></div>',
        nextArrow: '<div class="slick-next" title="Вперед"></div>',
        infinite: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    $('#wrapper-news-btn').on('click', function(){
        $('.block-news-more').removeClass('hidden');
        $('.wrapper-news-btn').addClass('hidden');
    });

    $('#more-prosto-o-sloznom').on('click', function(){
        $('.other-serials-prosto .serials .item').removeClass('hidden');
        $('#more-prosto-o-sloznom').addClass('hidden');
    });

    // Открытие и закрытие социальных кнопок в блоке Share. Страница видеопроект
    var sharesList = document.querySelector('.shares-list');
    var shareListToggle = document.querySelector('.shares-list__toggle');
    var shareCounter = document.querySelector('.shares-block__share');
    var shareWA = document.querySelector('.shares-list__whatsapp');
    var shareGoogle = document.querySelector('.shares-list__googleplus');
    var shareOK = document.querySelector('.shares-list__ok');
    var shareRSS = document.querySelector('.shares-list__rss');

    $(shareListToggle).on('click', function(e){
        e.preventDefault();
        shareListToggle.style.display = 'none';
        shareCounter.style.display = 'none';
        shareWA.style.display = 'list-item';
        shareGoogle.style.display = 'list-item';
        shareOK.style.display = 'list-item';
        shareRSS.style.display = 'list-item';
        sharesList.style.margin = '6px 0';
    });

    $('.shares-list__toggle-prosto').on('click', function(){
        $('.shares-list__toggle-prosto').addClass('mobile-hide');
        $('.shares-block__share-prosto').addClass('mobile-hide');
        $('.shares-list__odnoklassniki-prosto').removeClass('mobile-hide');
        $('.shares-list__flipboard-prosto').removeClass('mobile-hide');
        $('.shares-list__google-prosto').removeClass('mobile-hide');
    });
    // логика поведения блока социальных сетей на странице forbes video
    var clickMoreSocial = false;
    $('.video-social-btn-js').on('click', function (e) {
      if (clickMoreSocial == false) {
          clickMoreSocial = true;
          e.preventDefault();
          $('.item-social').show();
          $('.item-btn').hide();
      }
        return;
    });
    $(window).resize(function(){
      if (($(window).width()<=768) && clickMoreSocial == true) {
          clickMoreSocial = false;
          $('.item-social').show();
          $('.item-btn').hide();
      }
    });
    $('.video-header-ipad-menu-js').select2({
        customClass: "myselectbox",
        placeholder: "ПОКАЗАТЬ ВСЕ ВИДЕО",
        allowClear : false,
        minimumResultsForSearch: -1,
        width: 'resolve'
    });
    // функция измененния ширины списка исходя из количества пунктов
    function calculatеWidthList(colItem, whidthItem) {
        var widthList = (( ($(colItem).children().length) * whidthItem )  + ($(colItem).children().length) * (parseInt($(colItem).children().css('margin-right'))) + 'px');
        $(colItem).css('width', widthList);
    };
    $(window).resize(function(){
        setsLocationSlickArrow(numberSlide);
        if ($(window).width()<=560) {
            calculatеWidthList('.video-serial-main-block-item', 260);
        } else {
            $('.video-serial-main-block-item').css('width', 'auto');
        }
    });

    // слайдер на станице video-forbes .video-serial-slider-list
    $(function() {
        if ($(window).width()<=560) {
            $('.video-serial-slider-list').removeClass('video-serial-slider-list-js');
            $('.video-serial-slider').addClass('video-serial-slider--mobile');
            calculatеWidthList('.video-serial-main-block-item', 260);
        } else {
          $('.video-serial-main-block-item').css('width', 'auto');
            $('.video-serial-slider-list-js').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: false,
                arrows: true,
                lazyLoad: 'ondemand',
                draggable: false,
                prevArrow: '<div class="slick-prev" title="Назад"></div>',
                nextArrow: '<div class="slick-next" title="Вперед"></div>',
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1151,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 701,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 561,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    });

    // скролл к разделу подписка на странице brandvoice
    $('.js-scroll-to-subscribe').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function () {
        });
    });

// страница спецпроекта itogi2018
    $('.btn-pop-up-js').on('click', function (e) {
        e.preventDefault();
            topToPage = $(this).offset().top;
            topToWindow = this.getBoundingClientRect().top;
            topPopUpScroll = topToPage - topToWindow;
            $('.cl-pop-up-js').addClass('display-none');
            $('.pop-up-text-mob-js').html($(this).parent().siblings('.description').html());
            $('.pop-up-text-mob').removeClass("display-none");
            $("body").addClass("pop-up-open");
    });

    $('.close-pop-up-text-js').on('click', function () {
        setTimeout ( function() {
            $('html, body').scrollTop(topPopUpScroll)
        }, 1 );
        $('.pop-up-text-mob').addClass("display-none");
        $("body").removeClass("pop-up-open");
    });

// кнопка на странице /forbes-agenda/breakfast
    $('.btn-show-more-participants-js').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $('.breakfast-conf .participants .item').show();
    });

    $('.position-js').on('click', function (e) {
        e.preventDefault();
        topToPage = $(this).offset().top;
        topToWindow = this.getBoundingClientRect().top;
        topPopUpScroll = topToPage - topToWindow;
        $('.cl-pop-up-js').addClass('display-none');
        $('.pop-up-text-mob-js').html($(this).siblings('.pop-up-js').html());
        $('.pop-up-text-mob').removeClass("display-none");
        $("body").addClass("pop-up-open");
    });

    $('.close-pop-up-text-js').on('click', function () {
        setTimeout ( function() {
            $('html, body').scrollTop(topPopUpScroll)
        }, 1 );
        $('.pop-up-text-mob').addClass("display-none");
        $("body").removeClass("pop-up-open");
    });

    // задает расположение переключателей слайдера slider-serial-js в зависимости от ширины контента
    var numberSlide = 0;
    setsLocationSlickArrow = function(numberSlide) {
        var maxHeight = 0;
        var slickArrowBottom = 0;
        var slickArrowHeight = $('.slider-serial-js .slick-arrow').height();
        ($(".item-slide").eq(numberSlide)).find('.col-3').each(function(index, div) {
            var thisHEight =$(this).height();
            if (thisHEight > maxHeight) {
                maxHeight = thisHEight;
            }
            slickArrowBottom = maxHeight - slickArrowHeight;
        });
        $('.slider-serial-js .slick-arrow').css({'bottom': slickArrowBottom + 'px'})
    };
    setsLocationSlickArrow(numberSlide);
    $('.slider-serial-js').on('beforeChange', function(event, slick, currentSlide, nextSlide ){
        numberSlide = nextSlide;
        setsLocationSlickArrow(numberSlide);
    });

    //блок обратного отсчета
    function countdownRun() {
        var whereToInsert = document.getElementsByClassName('countdownrun-conf')[0];
        if (whereToInsert === undefined) {
          return;
        }
        var deadline = whereToInsert.getAttribute('data-deadline');
        if (deadline == null) {
          return;
        }

    whereToInsert.insertAdjacentHTML('beforeend', '<div class="countdown">'
        + '<div class="countdown-time">'
        +   '<div id="cdt-days">00</div><div class="colon">:</div>'
        +   '<div id="cdt-hours">00</div><div class="colon">:</div>'
        +   '<div id="cdt-minutes">00</div><div class="colon">:</div>'
        +   '<div id="cdt-seconds">00</div>'
        + '</div>'
        + '<div class="countdown-time-name">'
        +   '<div>дней</div>'
        +   '<div>часов</div>'
        +   '<div>минут</div>'
        +   '<div>секунд</div>'
        + '</div>'
        + '</div>');
    function runSetTime(){
        var t = Date.parse(deadline) - Date.parse(new Date());
        var days    = Math.floor( t/(1000*60*60*24) );
        var hours   = Math.floor( (t/(1000*60*60)) % 24 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var seconds = Math.floor( (t/1000) % 60 );
        var returnTime = {
            'days'    : (days < 10) ? '0' + days : days,
            'hours'   : (hours < 10) ? '0' + hours : hours,
            'minutes' : (minutes < 10) ? '0' + minutes : minutes,
            'seconds' : (seconds < 10) ? '0' + seconds : seconds
        };
        if (t >= 1000 * 60 * 10) {
            document.getElementById('cdt-days').innerHTML = returnTime.days;
            document.getElementById('cdt-hours').innerHTML = returnTime.hours;
            document.getElementById('cdt-minutes').innerHTML = returnTime.minutes;
            document.getElementById('cdt-seconds').innerHTML = returnTime.seconds;
        } else {
            clearInterval(interval);
        }
    };

    runSetTime();
    var interval = setInterval(runSetTime, 1000);
    var $countdown = document.getElementsByClassName('countdown')[0];
    if (!$countdown.classList.contains('active')) {
        $countdown.classList.add('active');
        $countdown.setAttribute('data-function', arguments.callee.name + '()');
    }
}
countdownRun();
})(jQuery);
