document.write("Page du jeu en question<br><br><br>Le jeu serai ici<br><br><br>");

/* CB = Casse-Brique (et pas Carte Bancaire ^^)
Cette variable regroupe toutes les variables globales du jeu et les fonctions associées. C'est juste pour structurer le code.)*/



var cb = {
	createGameStage: function (){
        this.stage = new Kinetic.Stage({
                container: 'container',
                width: 1003,
                height: 1003
        });
        
        this.layer = new Kinetic.Layer(); // Layer = couche en anglais

        this.rect = new Kinetic.Rect({ // Rectangle de base, le contour du jeu
                x: 2,
                y: 2,
                width: 1000,
                height: 1000,
                stroke: 'black',
                strokeWidth: 2
        });
        this.layer.add(this.rect);
		this.stage.add(this.layer);
	}
};

cb.createGameStage();