$( document ).ready(function() {

    // 
    
    var rotationSnap = 90;
    var dragArea = 6*355;
    var dragPercent;
    var dragPos;
    
    var content = document.getElementById("content");
    
    var contentTween = TweenLite.to(content, 1,{scrollTo:{y:'max', autoKill:false}, paused:true, ease:Linear.easeNone});
    
    Draggable.create("#knob",
    {
        type:"rotation",
        bounds:{minRotation:0, maxRotation:360}, throwProps:true,
        onDrag: function()
        {
            contentTween.progress(this.rotation / 360);
        },
        onThrowUpdate:function(){
            contentTween.progress(this.rotation / 360);
        },
        
    });
    
    Draggable.create(content,
    {
      type:"scrollTop", 
      edgeResistance:0.5, throwProps:true,
      onDrag: function()
      {
        dragPos = (Draggable.get("#content").y*-1);
        dragPercent = ((dragPos/dragArea)*100).toFixed(1);
        console.log(dragPercent);
        TweenLite.to("#knob", 0, {rotation:dragPercent*3.6});
      },
      
      onThrowUpdate:function()
      {
        dragPos = (Draggable.get("#content").y*-1);
        dragPercent = ((dragPos/dragArea)*100).toFixed(1);
        console.log(dragPercent);
        TweenLite.to("#knob", 0, {rotation:dragPercent});
      }
        });
  
  });