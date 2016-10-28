jquery.observer
=======

Simple [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) wrapper for jQuery.  
Searches the entire root tree for matching nodes everytime a node was added or removed.  

371 bytes gzipped (694 bytes uncompressed)

## Usage

`$(root).observe(selector [, options], onAdded, onRemoved)`  
`$(root).ignore()`  

For available options see [MutationObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit).  
Default options are: `{ childList: true }`