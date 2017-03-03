var layerA;

layerA = new Layer({
  x: Align.center,
  y: Align.center,
  width: 200,
  height: 200,
  backgroundColor: "#FAFB40"
});

layerA.onClick(function() {
  return layerA.animate({
    properties: {
      scale: 3,
      backgroundColor: "#C2FF01",
      borderRadius: 100
    }
  });
});
