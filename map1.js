function        ligne(win)
{
    var		x;
    var		y;
    var		z;

    x = 0;
    y = 0;
    z = 0;
    while (y <= 900)
    {
        while (x <= 900)
        {
            mlj_pixel_put(win, isometrique_x(x, y, z) + 900,
			  isometrique_y(x, y, z) + 300,"#FFFFFF");
            x++;
        }
        x = 0;
        y = y + 30;
    }
    x = 0;
    y = 0;
    ligne_suite(win);
}

function	ligne_suite(win)
{
    x = 0;
    y = 0;
    z = 0;
    while (x <= 900)
    {
        while (y <= 900)
        {
            mlj_pixel_put(win, isometrique_x(x, y, z) + 900,
                          isometrique_y(x, y, z) + 300, "#FFFFFF");
            y++;
        }
        y = 0;
        x = x + 30;
    }
}
