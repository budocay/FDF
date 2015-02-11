function	main()
{
    var		x;
    var		y;
    var		z;
    var		win;
    var		tab1;
    var		tab2;

    x = 40;
    y = 50;
    z = 0;
    mlj_init("FDF");
    win = mlj_new_window(1920, 1080, "FDF");
    tab1 = isometrique_x(x, y, z);
    tab2 = isometrique_y(x, y ,z);
    ligne(win);
}

function	isometrique_x(x, y, z)
{
    var		x2;
    var		y2;

    cte1 = 0.5;
    cte2 = 0.5;
    return (0.5 * x - 0.5 * y);
}

function	isometrique_y(x, y, z)
{
    var		x2;
    var		y2;

    cte1 = 0.5;
    cte2 = 0.5;
    return (z + 0.5 / 2 * x + 0.5 / 2 * y);
}
