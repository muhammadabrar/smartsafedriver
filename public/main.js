
  /**
   * Navbar links active state on scroll
   */
   let navbarlinks = select('#navbar .scrollto', true)
   const navbarlinksActive = () => {
       console.log("main.js file is running");
     let position = window.scrollY + 200
     navbarlinks.forEach(navbarlink => {
       if (!navbarlink.hash) return
       let section = select(navbarlink.hash)
       if (!section) return
       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
         navbarlink.classList.add('active')
       } else {
         navbarlink.classList.remove('active')
       }
     })
   }
   window.addEventListener('load', navbarlinksActive)
   onscroll(document, navbarlinksActive)
 
   /**
    * Scrolls to an element with header offset
    */
   const scrollto = (el) => {
     let header = select('#header')
     let offset = header.offsetHeight
 
     if (!header.classList.contains('header-scrolled')) {
       offset -= 16
     }
 
     let elementPos = select(el).offsetTop
     window.scrollTo({
       top: elementPos - offset,
       behavior: 'smooth'
     })
   }
 
   /**
    * Header fixed top on scroll
    */
   let selectHeader = select('#header')
   if (selectHeader) {
     let headerOffset = selectHeader.offsetTop
     let nextElement = selectHeader.nextElementSibling
     const headerFixed = () => {
       if ((headerOffset - window.scrollY) <= 0) {
         selectHeader.classList.add('fixed-top')
         nextElement.classList.add('scrolled-offset')
       } else {
         selectHeader.classList.remove('fixed-top')
         nextElement.classList.remove('scrolled-offset')
       }
     }
     window.addEventListener('load', headerFixed)
     onscroll(document, headerFixed)
   }
 