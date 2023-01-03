const accordion = function (options) {
  /*
    راه اول

    let source = {
      prop1: value1,
      prop2: value2, 
      ...
    }

    let target = {}

    Object.assign(target, source, source, ...): object  => copy of object and merge


    راه دوم

    let source = {
      prop1: value1,
      prop2: value2, 
      ...
    }

    let target = Object.assign({}, source, source, ...):

  */

  /**
   * set default paraeters
   */
  const defs = {
    accordionSelector: '.accordion',
    duration: '.3s',
    type: 'single',
  };

  

  const opts = Object.assign({}, defs, options)

  // console.log(opts)
  // opts.duration = '5'

  // console.log(defs)

  /**
   * Description Line 1
   * Description Line 1
   * Description Line 1
   * 
   * @param {type of parameter} parameterName: description of parameter
   * @param {type of parameter} parameterName: description of parameter
   * @param {type of parameter} parameterName: description of parameter
   */



  /**
   * Collapse content Element
   * @param {HTMLElement} content: content elemnt for collapse
   */
  const collapseContent = function (content) {
    content.style.height = null;
  };

  /**
   * Expand Content with transition
   * @param {HTMLElement} content 
   */
  const expandContent = function (content) {
    content.style.height = content.scrollHeight + 'px';
  };

  /**
   * Toggle Expand or Collapse Content with transition
   * @param {HTMLElement} content 
   */
  const toggleCollapse = function (content) {
    if (content.style.height) {
      collapseContent(content)
    } else {
      expandContent(content);
    }
  };

  /**
   * Acoordion Elements
   */
  const accordions = document.querySelectorAll(opts.accordionSelector);

  for (const accordion of accordions) {
    /******** Content Setting **********/
    const accordionContents = accordion.querySelectorAll('.content');
    for (const accordionContent of accordionContents) {
      accordionContent.style.transitionDuration = opts.duration;
    }
    /******** End of Content Setting **********/

    /**** Titles Setting ************/
    const accordionTitles = accordion.querySelectorAll('.title');
    for (const accordionTitle of accordionTitles) {
      accordionTitle.onclick = function () {
        if (opts.type === 'single') {
          /* find active title */
          const activeTitle = accordion.querySelector('.title.active');
          /* remove active */
          activeTitle.classList.remove('active');
   
          collapseContent(activeTitle.nextElementSibling);

          this.classList.add('active');
          expandContent(this.nextElementSibling);
        } else if (opts.type === 'multiple') {
          this.classList.toggle('active');
          toggleCollapse(this.nextElementSibling);
        } else {
          throw 'type must be "single" or "multiple"';
        }
      };

      /************/
      if (accordionTitle.classList.contains('active')) {
        expandContent(accordionTitle.nextElementSibling);
      }
      /******* End of Title Setting *************/
    }
  }
};

