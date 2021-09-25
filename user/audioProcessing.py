from flask import Flask, render_template, request, redirect
import speech_recognition as sr


class AudioProceesing:
    def practice(self):
        transcript = ""
        count = 0

        if request.method == "POST":
            print("FORM DATA RECEIVED")

            if "file" not in request.files:
                return redirect(request.url)

            file = request.files["file"]
            if file.filename == "":
                return redirect(request.url)

            if file:
                recognizer = sr.Recognizer()
                audioFile = sr.AudioFile(file)
                with audioFile as source:
                    data = recognizer.record(source)
                transcript = recognizer.recognize_google(
                    data, language="ta-IN")

                spoken_words = []
                for i in transcript.split():
                    spoken_words.append(i)

                print(spoken_words)
                kural = ["அகர", "முதல", "எழுத்தெல்லாம்",
                         "ஆதி", "பகவன்", "முதற்றே", "உலகு"]

                for word in spoken_words:
                    if(word in kural):
                        count += 1
                coins = 0
                if(count > 0 and count <= 3):
                    coins = 1
                elif(count > 3 and count <= 6):
                    coins = 2
                else:
                    coins = 3
        return render_template('learn_thirukkural.html', transcript=transcript, coins=coins, mark=count)
