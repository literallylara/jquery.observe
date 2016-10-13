jquery.observer
=======

Simple [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) wrapper for jQuery.  
Searches the entire root tree for matching nodes everytime a node was added or removed.  

371 bytes gzipped (694 bytes uncompressed)

## Usage

`$(root).observe(selector, onAdded, onRemoved)`  
`$(root).ignore()`