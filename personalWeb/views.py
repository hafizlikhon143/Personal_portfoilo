from django.shortcuts import redirect, render
from django.core.mail import send_mail
from .forms import OrderForm, ContactForm

# Create your views here.


def home(request):
    if request.method == "POST":
        form = OrderForm(request.POST)
        form2 = ContactForm(request.POST)
        if form.is_valid():
            f = form.save(commit=False)
            f.save()
        if form2.is_valid():
            subject = form2.cleaned_data["client_subject"]
            sender = form2.cleaned_data["client_email"]
            message = "Email Address: "+sender + "\n" + \
                form2.cleaned_data["client_letter"]
            recipients = ["personalPortLikhon@gmail.com",
                          "hafizlikhon143@gmail.com"]
            send_mail(subject, message, sender, recipients)

        return redirect("/")
    else:
        form = OrderForm()
        form2 = ContactForm()
        return render(request, "index.html", {"form": form, "form2": form2})
