# Wardrobify

Team:

* Edward - Hats
* Alex - Shoes

## Design
The design of our project was relatively standard but we wanted to include the pexels API in the search on our "LIST" functions. We enabled it on the Shoe side and left it as a hard link on the Hat side. We designed the pexels search to be not incredibly specific so you get a unique image that may or may not represent your shoe perfectly (because it was more fun that way "like a surprise xmas present!"). Then we used react functions to populate data from the server -> model -> view -> nav.js -> app.js -> shoe/hat form/list and were able to get the delete function to work properly. Our next step would be to include a "are you sure" box onClick after clicking delete. 
## Shoes microservice

Our BinVO model forms the connection to the wardrobe microservice via the native Bin model. 
We can see below that in the poller, the service creates BinVO objects using the contents of the native BIN. It's better to use this because then the wardrobe microservice has less processing to do and only pulls a data point rather than a living/breathing function. 

BinVO.objects.update_or_create(
            import_href=bin["href"],
            defaults={
            "closet_name": bin["closet_name"],
            "bin_number": bin["bin_number"],
            "bin_size": bin["bin_size"]
            }

The Shoe model is pretty standard but uses a foreignkey to the BinVO so the term "shoes" is accessible. We also encorporated pexelsAPI to generate the picture_url which is snazzy. 

## Hats microservice

The locationVO value object model in the hats_rest app uses a poller to link with the location model in the wardrobe microservice. The hats and wardrobe apps are separated as microservices to begin with because they serve different functionalities. The poller pulls the entity's href attribute and applies it to the VO's import_href attribute. This allows the hats microservice to use CRUD-based functionalities with its LocationVO foreign key. In the real world use case, a user can create a hat item and organize it in a specific location.
