# Workshop for this step

* Create a service that uses `Http` to load video data from the API:

```
ng generate service videoData
```

* Use the RxJS `.map()` operator in the service to extract the data from
  the `Response` object.

* Inject the service into VideoListComponent and use it to load the
  video data. (Don't forget to make `VideoDataService` a provider!)
