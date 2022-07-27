# Generated by Django 4.0.3 on 2022-07-27 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0003_alter_locationvo_closet_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hat',
            name='location',
        ),
        migrations.AddField(
            model_name='hat',
            name='location',
            field=models.ManyToManyField(blank=True, null=True, related_name='hats', to='hats_rest.locationvo'),
        ),
    ]