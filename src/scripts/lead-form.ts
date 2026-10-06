function noteFrom(form: HTMLFormElement): string {
  const data = new FormData(form);
  const lines: string[] = [];
  for (const [key, value] of data.entries()) {
    if (typeof value !== "string" || !value.trim() || key.startsWith("_")) continue;
    lines.push(`${key}: ${value.trim()}`);
  }
  return lines.join("\n");
}

function say(form: HTMLFormElement, text: string) {
  const status = form.querySelector("[data-lead-status]");
  if (status instanceof HTMLElement) status.textContent = text;
}

function showPreview(form: HTMLFormElement, body: string) {
  const preview = form.querySelector("[data-lead-preview]");
  const label = form.querySelector("[data-lead-preview-label]");
  if (preview instanceof HTMLTextAreaElement && label instanceof HTMLElement) {
    label.hidden = false;
    preview.value = body;
  }
}

async function sendLead(form: HTMLFormElement) {
  const kind = form.dataset.lead === "join" ? "join" : "rental";
  const endpoint = form.dataset.endpoint?.trim() ?? "";
  const email = form.dataset.email?.trim() ?? "";
  const sms = form.dataset.sms?.trim() ?? "";
  const body = noteFrom(form);
  showPreview(form, body);

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (response.ok) {
        form.reset();
        say(
          form,
          kind === "join"
            ? "You’re on the community list. This did not book the trailer."
            : "Rental request received. Call or text (254) 251-5219 if you need the date held now. This form does not hold the trailer.",
        );
        return;
      }
    } catch {
      /* Fall through to email or text. */
    }
    say(form, "The form inbox did not take that. The note is in the box. Call or text (254) 251-5219.");
    return;
  }

  const subject = kind === "join" ? "TBR community join" : "TBR trailer rental interest";
  if (email) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    say(form, "Your email app should open with this note. If it does not, copy the box. Call or text (254) 251-5219.");
    return;
  }

  if (sms) {
    window.location.href = `sms:+${sms}?body=${encodeURIComponent(body)}`;
    say(
      form,
      kind === "join"
        ? "Your text app should open with this community note. Send it. This does not book the trailer."
        : "Your text app should open with this rental request. Send it. The date is not held until we talk.",
    );
    return;
  }

  say(form, "Copy the note and call (254) 251-5219.");
}

document.querySelectorAll("form.lead-form").forEach((node) => {
  if (!(node instanceof HTMLFormElement)) return;
  node.addEventListener("submit", (event) => {
    event.preventDefault();
    void sendLead(node);
  });
});
