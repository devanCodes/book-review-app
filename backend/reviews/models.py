from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    published_date = models.DateField()
    review_text = models.JSONField(default=list)  # This field should be a list
    rating = models.IntegerField(default=0)  # This field should be an integer

    def __str__(self):
        return self.title

    
