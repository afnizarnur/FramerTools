plugin.run = (contents, options) ->
	"""
#{contents}
flow.showNext(layerA, animate: false)
"""
