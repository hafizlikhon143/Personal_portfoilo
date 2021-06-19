from django import forms
from django.forms import ModelForm
from django.forms import Form
from .models import *


class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = "__all__"


class ContactForm(Form):
    client_email = forms.EmailField(
        widget=forms.EmailInput(attrs={"placeholder": "Enter your email address.."}))
    client_subject = forms.CharField(
        max_length=255, widget=forms.TextInput(attrs={"placeholder": "Enter Subject of your feedback..."}))
    client_letter = forms.CharField(
        widget=forms.Textarea(attrs={"placeholder": "Write your feedback here.."}))
