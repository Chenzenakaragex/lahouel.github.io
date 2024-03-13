document.querySelectorAll('.une-etoile').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        document.getElementById('une_etoile').style.display = 'block';
    });
    item.addEventListener('mouseleave',function(){
        document.getElementById('une_etoile').style.display = 'none';
    });
});

document.querySelectorAll('.deux-etoiles').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        document.getElementById('deux_etoiles').style.display = 'block';
    });
    item.addEventListener('mouseleave',function(){
        document.getElementById('deux_etoiles').style.display = 'none';
    });
});

document.querySelectorAll('.trois-etoiles').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        document.getElementById('trois_etoiles').style.display = 'block';
    });
    item.addEventListener('mouseleave',function(){
        document.getElementById('trois_etoiles').style.display = 'none';
    });
});

document.querySelectorAll('.quatre-etoiles').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        document.getElementById('quatre_etoiles').style.display = 'block';
    });
    item.addEventListener('mouseleave',function(){
        document.getElementById('quatre_etoiles').style.display = 'none';
    });
});

document.querySelectorAll('.cinq-etoiles').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        document.getElementById('cinq_etoiles').style.display = 'block';
    });
    item.addEventListener('mouseleave',function(){
        document.getElementById('cinq_etoiles').style.display = 'none';
    });
});