# Wardrobify

Team:

* Edward - Hats
* Alex - Shoes

## Design

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
