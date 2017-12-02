/* Knil 2.0
 * created: 12/1/2017
 * Author: Michael Winberry
 *
 *Function List:
 *  creatKnil() Initializes knil object
 *  gameOver() Shows game over screen.
*/
$(function () {
	$(document).ready( function () 
	{
		$(document).disableSelection();

		var gameWidth = $('#gameBoard').width();
		var gameHeight = $('#gameBoard').height();

		var knil = createKnil();

		var enemies = [];

		var bosses = [];

		var levels =  [];

		var createKnil = function () 
		{
			return {
				id: '#knil',

				currentHealth: 3,

				totalHealth: 3,

				position: 'standing',

				x: gameWidth/2,

				y: gameHeight/2,

				draw: function () {
					$('#gameBoard').append('<img id=knil src=' + 
						getImage(this.position) + '/>');
					$(this.id).top = this.y;
					$(this.id).left = this.x;

				}

				setImage: function (position)
				{
					$('#knil').attribute('src', getImage(position));
				}

				getImage: function (position) 
				{
					if (position = 'still')  
					{
						return '/resources/knilStanding.jpg';
					}
					else if (position == 'left') 
					{
						return '/resources/knilLeft.jpg';
					}
					else if (position == 'right') 
					{
						return '/resources/knilLeft.jpg';
					}
					else if (position == 'up') 
					{
						return '/resources/knilUp.jpg';
					}
					else if (postion == 'down')
					{
						return '/resources/knilDown.jpg';
					}
					else if (position == 'sLeft')
					{
						return '/resources/swordLeft';
					}
					else if (position == 'swordRight')
					{
						return '/resources/swordRight';
					}
					else if (position == 'swordUp')
					{
						return '/resources/swordUp';
					}
					else if (position == 'swordDown');
					{
						return '/resources/swordUp';

					}
					else 
					{
						alert("Invalid Entry");
					}
				},

				drawHealth: function (hearts) 
				{
					for (var i = 0; var i < hearts.length; ++i) 
					{
						$('#hearts').append($('<img id=health' + i + ' src=' +
							'resources/heart.jpg' + '></img>'));
					}
				},
				addHealth: function () 
				{
					$('#hearts').append($('<img id=health' + i + ' src=' +
						'resources/heart.jpg' + '></img>'));
					this.health += 1;
				},
				removeHeath: function () 
				{
					if (health > 0)
					{
						$('#hearts').append($('<img id=health' + i + ' src=' +
							'resources/heart.jpg' + '></img>'));
						this.health -= 1;
					}
					else 
					{
						gameOver();
					}
				},

				move: function (position) 
				{
					if (position == 'left')
					{
						$(this.id).animate({
							left: '+=20'
						});
						this.x += 20;
					}
					else if (postion == 'right')
					{
						this.x -= 20;
					}
				}
			}
		}

		var gameOver = function () {

		}






	})
})