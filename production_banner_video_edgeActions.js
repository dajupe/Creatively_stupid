/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var youtubevid = $("<iframe/>");
         sym.$("flaunt").append(youtubevid);
         youtubevid.attr('type','text/html');
         youtubevid.attr('width','1064');
         youtubevid.attr('height','598');
         youtubevid.attr('src','https://player.vimeo.com/video/272727079?title=0&byline=0&portrait=0');  // url/Video_Id
         youtubevid.attr('frameborder','0');       // 1 | 0
         youtubevid.attr('allowfullscreen','1');   // 1 | 0
         
         var youtubevid = $("<iframe/>");
         sym.$("swing").append(youtubevid);
         youtubevid.attr('type','text/html');
         youtubevid.attr('width','1064');
         youtubevid.attr('height','598');
         youtubevid.attr('src','https://player.vimeo.com/video/215396236?title=0&byline=0&portrait=0');  // url/Video_Id
         youtubevid.attr('frameborder','0');       // 1 | 0
         youtubevid.attr('allowfullscreen','1');   // 1 | 0
         
         
         
         
         
         
         var youtubevid = $("<iframe/>");
         sym.$("gypsys").append(youtubevid);
         youtubevid.attr('type','text/html');
         youtubevid.attr('width','1064');
         youtubevid.attr('height','598');
         youtubevid.attr('src','https://player.vimeo.com/video/33274621?title=0&byline=0&portrait=0');  // url/Video_Id
         youtubevid.attr('frameborder','0');       // 1 | 0
         youtubevid.attr('allowfullscreen','1');   // 1 | 0
         
         var youtubevid = $("<iframe/>");
         sym.$("foal").append(youtubevid);
         youtubevid.attr('type','text/html');
         youtubevid.attr('width','1064');
         youtubevid.attr('height','598');
         youtubevid.attr('src','https://player.vimeo.com/video/63937847?title=0&byline=0&portrait=0');  // url/Video_Id
         youtubevid.attr('frameborder','0');       // 1 | 0
         youtubevid.attr('allowfullscreen','1');   // 1 | 0
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flaunt_watch_symbol}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("flaunt_play");
         
         sym.getVariable("player-1").playVideo();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${swing_play}", "click", function(sym, e) {
         sym.getVariable("player-2").playVideo();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'flaunt'
   (function(symbolName) {   
   
   })("flaunt");
   //Edge symbol end:'flaunt'

   //=========================================================
   
   //Edge symbol: 'swing'
   (function(symbolName) {   
   
   })("swing");
   //Edge symbol end:'swing'

   //=========================================================
   
   //Edge symbol: 'gypsys'
   (function(symbolName) {   
   
   })("gypsys");
   //Edge symbol end:'gypsys'

   //=========================================================
   
   //Edge symbol: 'foal'
   (function(symbolName) {   
   
   })("foal");
   //Edge symbol end:'foal'

   //=========================================================
   
   //Edge symbol: 'flaunt_watch_symbol'
   (function(symbolName) {   
   
   })("flaunt_watch_symbol");
   //Edge symbol end:'flaunt_watch_symbol'

   //=========================================================
   
   //Edge symbol: 'swing_play'
   (function(symbolName) {   
   
   })("swing_play");
   //Edge symbol end:'swing_play'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-15353185");