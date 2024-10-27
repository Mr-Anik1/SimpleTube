01:25:00

onClick={handleHamburgerClick}
vs
onClick={()=>handleHamburgerClick()}

coursedl.org | bytescore.lol

Homework -> what is urlSearchParams?
Homework -> LRU cache

#### Next-

### I have to implement these featue.

- focus/blur in the input box

  - when I focus input box it shows search suggestions but when I blur it won't show search suggestions.

### Completed

- n level nested comment section implement done
- search suggestions add to the redux store for better performance.

{
"i":["i am","iphone","i pro"];
"ip":["iphone","iphone pro","i phone pro max"]
}

console.log(last?.go[ab])//undefined

const suggestons = useSelector(
(store) => store?.searchSlice?.searchSuggestions[ab]);

### steps :

debouncedSearchTerm -  
searchSuggestions - []

**_Extra rendered this way but clean code._**

debouncedSearchTerm - r
searchSuggestions - undefined

debouncedSearchTerm - r
searchSuggestions - (10) ['rudra', 'ringtone', 'romantic video', 'rupkothar golpo', 'rakib hossain', 'rudra cartoon', 'rudra bangla', 'random animation', 'rap song', 'rihan']

### Early Step:

DE -  
S - undefined

DE - r
S - undefined

DE - r
S - (10) ['rudra', 'ringtone', 'rupkothar golpo', 'romantic video', 'rakib hossain', 'rudra cartoon', 'rudra bangla', 'random animation', 'rap song', 'rihan']

### This is well optimized search implementation:

- **_This search is using:_**
  - Live API
  - Debouncing
  - Caching
