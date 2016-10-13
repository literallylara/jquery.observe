/*! jquery.simplescroll
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

	let observers = []

	let findElement = function(target, selector, callback)
	{
		if ($(target).is(selector)) return callback(target)
		$(target).find(selector).each(callback)
	}

	$.fn.observe = function(selector, onAdded, onRemoved) { this.each(function()
	{
		var observer = new MutationObserver(function(mutations)
		{
			mutations.forEach(function(mutation)
			{
				onAdded   && [].forEach.call(mutation.addedNodes,   v => findElement(v,selector,onAdded))
				onRemoved && [].forEach.call(mutation.removedNodes, v => findElement(v,selector,onRemoved))
			});
		});

		observer.observe(this, { childList: true })
		observers.push[this,observer]
	})}

	$.fn.ignore = function(opts) { this.each(function()
	{
		let observer, index

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