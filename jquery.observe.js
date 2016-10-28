/*! jquery.observe v0.0.3
 * 
 * Copyright (c) 2016 @literallylara
 * Under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(factory)
{
	if(typeof define == "function" && define.amd)
	{
		define(["jquery"],factory);
	}
	else if(typeof module !== "undefined" && module.exports)
	{
		module.exports = factory;
	}
	else
	{
		factory(window.jQuery || window.$);
	}
}(function($)
{
	"use strict";

	var observers = []

	var findElement = function(target, selector, callback)
	{
		if ($(target).is(selector)) return callback(target)
		$(target).find(selector).each(callback)
	}

	$.fn.observe = function(selector, arg1, arg2, arg3) { this.each(function()
	{
		var arg1Obj   = typeof arg1 == "object"
		var options   = arg1Obj ? arg1 : { childList: true }
		var onAdded   = arg1Obj ? arg2 : arg1
		var onRemoved = arg1Obj ? arg3 : arg2

		var observer = new MutationObserver(function(mutations)
		{
			mutations.forEach(function(mutation)
			{
				onAdded   && [].forEach.call(mutation.addedNodes,   v => findElement(v,selector,onAdded))
				onRemoved && [].forEach.call(mutation.removedNodes, v => findElement(v,selector,onRemoved))
			});
		});

		observer.observe(this, options)
		observers.push[this,observer]
	})}

	$.fn.ignore = function() { this.each(function()
	{
		var observer, index

		observers.forEach(function(v,i)
		{
			if (v[0] === this)
			{
				observer = v[1]
				index = i
				return false
			}
		})

		observer.disconnect();
		observers.splice(i,1)
	})}
}))