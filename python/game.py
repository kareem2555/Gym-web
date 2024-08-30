import pygame as pg
# from random import *
# x = [3,4]
# print(choice(x))
pg.init()

WIDTH, HEIGHT = 400,400
screen = pg.display.set_mode((0,0), pg.FULLSCREEN)
red = pg.color.Color(255,0,0)
FPS = 60
step = 5
clock = pg.time.Clock()
run = True
x =0
y = 0
sen = pg.draw.rect(screen, red,(x,y, 40,40) )
while run:
    key = pg.key.get_pressed()
    clock.tick(FPS)
    # screen.fill(red, (0,0))
    for event in pg.event.get():
        if event.type == pg.QUIT:
            run = False
        if event.type == pg.KEYDOWN:
            if event.key == pg.K_f:
                sen.x += step
    if key[pg.K_s]:
        y += step
    if key[pg.K_w]:
        y -= step
    if key[pg.K_d]:
        x += step
    if key[pg.K_a]:
        x -= step
    
    # obj = pg.draw.rect(screen, red,(sen.x ,sen.y , 40,40) )
    pg.display.update()