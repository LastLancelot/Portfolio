using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Threading;

namespace Project_CODE_RED
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    
    
    public partial class MainWindow : Window
    {

        int graveSpeedX = 2;
        int graveSpeedY = -1;
        int starSpeedX = 4;
        int starSpeedY = -3;
        int batSpeedX = 6;
        int batSpeedY = -4;
        bool XorY = false;
        bool graveC = false;
        bool starC = false;
        bool batC = false;


        DispatcherTimer timer = new DispatcherTimer();
        DispatcherTimer ColorTimer = new DispatcherTimer();
        Uri web = new Uri("C:/Users/Volodymyr/Desktop/КР ПЗ/Project CODE RED/Project CODE RED/web1.png");
        public MainWindow()
        {
            
            InitializeComponent();

            timer.Tick += TimerEvent;
            timer.Interval = TimeSpan.FromMilliseconds(5);
            timer.Stop();
            ColorTimer.Tick += ColorTimerEvent;
            ColorTimer.Interval = TimeSpan.FromMilliseconds(1000);
            ColorTimer.Start();
        }

        private void ColorTimerEvent(object sender, EventArgs e)
        {
            Random random1 = new Random();
            Random random2 = new Random();
            Random random3 = new Random();
            Random random4 = new Random();
            Random random5 = new Random();
            Random random6 = new Random();
            Random random7 = new Random();
            Random random8 = new Random();
            Random random9 = new Random();

            Menu1.Foreground = new SolidColorBrush(Color.FromRgb((byte)random1.Next(255), (byte)random1.Next(255), (byte)random1.Next(255)));
            Menu2.Foreground = new SolidColorBrush(Color.FromRgb((byte)random2.Next(255), (byte)random2.Next(255), (byte)random2.Next(255)));
            Menu3.Foreground = new SolidColorBrush(Color.FromRgb((byte)random3.Next(255), (byte)random3.Next(255), (byte)random3.Next(255)));
            Menu4.Foreground = new SolidColorBrush(Color.FromRgb((byte)random4.Next(255), (byte)random4.Next(255), (byte)random4.Next(255)));
            Menu5.Foreground = new SolidColorBrush(Color.FromRgb((byte)random5.Next(255), (byte)random5.Next(255), (byte)random5.Next(255)));
            Menu6.Foreground = new SolidColorBrush(Color.FromRgb((byte)random6.Next(255), (byte)random6.Next(255), (byte)random6.Next(255)));
            Menu7.Foreground = new SolidColorBrush(Color.FromRgb((byte)random7.Next(255), (byte)random7.Next(255), (byte)random7.Next(255)));
            stoper.Foreground = new SolidColorBrush(Color.FromRgb((byte)random8.Next(255), (byte)random8.Next(255), (byte)random8.Next(255)));
            starter.Foreground = new SolidColorBrush(Color.FromRgb((byte)random9.Next(255), (byte)random9.Next(255), (byte)random9.Next(255)));
        }

        private void TimerEvent(object sender, EventArgs e)
        {

            Canvas.SetLeft(grave, Canvas.GetLeft(grave) - graveSpeedX);

            if (Canvas.GetLeft(grave) < 5 || Canvas.GetLeft(grave) + (grave.Width) > Application.Current.MainWindow.Width)
            {
                graveSpeedX = -graveSpeedX;
            }
            Canvas.SetTop(grave, Canvas.GetTop(grave) - graveSpeedY);

            if (Canvas.GetTop(grave) < 5 || Canvas.GetTop(grave) + (grave.Height) > Application.Current.MainWindow.Height)
            {
                Canvas.SetTop(grave, 5);
            }


            Canvas.SetLeft(star, Canvas.GetLeft(star) - starSpeedX);

            if (Canvas.GetLeft(star) < 100 || Canvas.GetLeft(star) + (star.Width) > Application.Current.MainWindow.Width + 100)
            {
                starSpeedX = -starSpeedX;
            }
            Canvas.SetTop(star, Canvas.GetTop(star) - starSpeedY);
            RotateTransform rotateTransform1 = new RotateTransform(0.4* Canvas.GetTop(star));
            star.RenderTransform = rotateTransform1;


            if (Canvas.GetTop(star) < 5 || Canvas.GetTop(star) + (star.Height) > Application.Current.MainWindow.Height)
            {
                Canvas.SetTop(star, 5);
            }

            Canvas.SetLeft(bat, Canvas.GetLeft(bat) - batSpeedX);

            if (Canvas.GetLeft(bat) < 5 || Canvas.GetLeft(bat) + (bat.Width) > Application.Current.MainWindow.Width)
            {
                batSpeedX = -batSpeedX;
            }
            Canvas.SetTop(bat, Canvas.GetTop(bat) - batSpeedY);

            if (Canvas.GetTop(bat) < 5 || Canvas.GetTop(bat) + (bat.Height) > Application.Current.MainWindow.Height)
            {
                batSpeedY = -batSpeedY;
            }

        }
        private void Code_Red_Click(object sender, RoutedEventArgs e)
        {
            Label1.Background = new SolidColorBrush(Colors.Red);
            Label1.Content = "BOOOO!!!";
        }

        private void Code_Blue_Click(object sender, RoutedEventArgs e)
        {
            Label1.Background= new SolidColorBrush(Colors.Blue);
            Label1.Content = "Happy Halloween!!!!";
        }



        private void BG_Click_1(object sender, RoutedEventArgs e)
        {
            
            BitmapImage BGImage = new BitmapImage();
            
            BGImage.BeginInit();
            BGImage.UriSource = new Uri("C:/Users/Volodymyr/Desktop/КР ПЗ/Project CODE RED/Project CODE RED/HL.png");
            BGImage.EndInit();
            myImage.ImageSource = BGImage;
            
        }

        private void BG_Click_2(object sender, RoutedEventArgs e)
        {

            BitmapImage BGImage = new BitmapImage();

            BGImage.BeginInit();
            BGImage.UriSource = new Uri("C:/Users/Volodymyr/Desktop/КР ПЗ/Project CODE RED/Project CODE RED/HL2.png");
            BGImage.EndInit();
            myImage.ImageSource = BGImage;

        }

        private void Web_Click_1(object sender, RoutedEventArgs e)
        {
            web = new Uri("C:/Users/Volodymyr/Desktop/КР ПЗ/Project CODE RED/Project CODE RED/web1.png");
        }
        private void Web_Click_2(object sender, RoutedEventArgs e)
        {
            web = new Uri("C:/Users/Volodymyr/Desktop/КР ПЗ/Project CODE RED/Project CODE RED/web2.png");
        }
        private void Web_Click_3(object sender, RoutedEventArgs e)
        {
            web = new Uri("C:/Users/Volodymyr/Desktop/КР ПЗ/Project CODE RED/Project CODE RED/web3.png");
        }



        private bool _isMoving;
        private Point? _buttonPosition;
        private double deltaX;
        private double deltaY;
        private TranslateTransform _currentTT;

        private void Samplebutton_PreviewMouseDown(object sender, MouseButtonEventArgs e)
        {
            if (_buttonPosition == null)
                _buttonPosition = Samplebutton.TransformToAncestor(mainPanel).Transform(new Point(0, 0));
            var mousePosition = Mouse.GetPosition(mainPanel);
            deltaX = mousePosition.X - _buttonPosition.Value.X;
            deltaY = mousePosition.Y - _buttonPosition.Value.Y;
            _isMoving = true;
        }

        private void Samplebutton_PreviewMouseUp(object sender, MouseButtonEventArgs e)
        {
            _currentTT = Samplebutton.RenderTransform as TranslateTransform;
            _isMoving = false;
        }

        private void Samplebutton_PreviewMouseMove(object sender, MouseEventArgs e)
        {
            if (!_isMoving) return;

            var mousePoint = Mouse.GetPosition(mainPanel);

            var offsetX = (_currentTT == null ? _buttonPosition.Value.X : _buttonPosition.Value.X - _currentTT.X) + deltaX - mousePoint.X;
            var offsetY = (_currentTT == null ? _buttonPosition.Value.Y : _buttonPosition.Value.Y - _currentTT.Y) + deltaY - mousePoint.Y;

            this.Samplebutton.RenderTransform = new TranslateTransform(-offsetX, -offsetY);
        }

        private void Code_Yellow_Click(object sender, RoutedEventArgs e)
        {
            Label2.Background = new SolidColorBrush(Colors.Yellow);
            Label2.Content = "BOOOO!!!";
        }

        private void Code_Green_Click(object sender, RoutedEventArgs e)
        {
            Label2.Background = new SolidColorBrush(Colors.Green);
            Label2.Content = "Happy Halloween!!!!";
        }


        private void Pumpkin_Click(object sender, RoutedEventArgs e)
        {
            
            var mousePosition = Mouse.GetPosition(mainPanel);
            deltaX = mousePosition.X - _buttonPosition.Value.X;
            deltaY = (mousePosition.Y - _buttonPosition.Value.Y);

            Image pumpkin = new Image();
            pumpkin.RenderTransform = new TranslateTransform(deltaX - 50, deltaY - 50);
            pumpkin.Height = 50;
            pumpkin.Width = 50;

            BitmapImage pumpkinImage = new BitmapImage(web);
            pumpkin.Source = pumpkinImage;
            mainPanel.Children.Add(pumpkin);
            
        }

        private void MenuItem_Click_Pumpkin(object sender, RoutedEventArgs e)
        {
            if (Samplebutton.Visibility == Visibility.Visible)
            {
                Samplebutton.Visibility = Visibility.Hidden;
            }
            else
            {
                Samplebutton.Visibility = Visibility.Visible;
            }
        }




        private void MenuItem_Click_XSpeed(object sender, RoutedEventArgs e)
        {
            speedBox.Visibility = Visibility.Visible;
            speedLabel.Visibility = Visibility.Visible;
            endChanges.Visibility = Visibility.Visible;
            XorY = true;
        }
        private void MenuItem_Click_YSpeed(object sender, RoutedEventArgs e)
        {
            speedBox.Visibility = Visibility.Visible;
            speedLabel.Visibility = Visibility.Visible;
            endChanges.Visibility = Visibility.Visible;
            XorY = false;
        }

        private void endChanges_Click(object sender, RoutedEventArgs e)
        {

            if (XorY == true)
            {

                if (graveC == true)
                {
                    graveSpeedX = int.Parse(speedBox.Text.ToString());
                }
                else if (starC == true)
                {
                    starSpeedX = int.Parse(speedBox.Text.ToString());
                }
                else
                {
                    batSpeedX = int.Parse(speedBox.Text.ToString());
                }

            }
            else
            {

                if (graveC == true)
                {
                    graveSpeedY = int.Parse(speedBox.Text.ToString());
                }
                else if (starC == true)
                {
                    starSpeedY = int.Parse(speedBox.Text.ToString());
                }
                else
                {
                    batSpeedY = int.Parse(speedBox.Text.ToString());
                }

            }
            speedBox.Visibility = Visibility.Hidden;
            speedLabel.Visibility = Visibility.Hidden;
            endChanges.Visibility = Visibility.Hidden;

        }

        private void stoper_Click(object sender, RoutedEventArgs e)
        {
            
            timer.Stop();
            stoper.Visibility = Visibility.Hidden;
            starter.Visibility = Visibility.Visible;
        }

        private void starter_Click(object sender, RoutedEventArgs e)
        {
            timer.Start();
            starter.Visibility = Visibility.Hidden;
            stoper.Visibility = Visibility.Visible;
        }

        private void MenuItemColorChanger_Click(object sender, RoutedEventArgs e)
        {
            if (ColorTimer.Interval == TimeSpan.FromMilliseconds(1000))
            {
                ColorTimer.Interval = TimeSpan.FromMilliseconds(999);
                ColorTimer.Stop();
            }
            else
            {
                ColorTimer.Interval = TimeSpan.FromMilliseconds(1000);
                ColorTimer.Start();
            }
            
        }





        private void grave_MouseDown(object sender, MouseButtonEventArgs e)
        {
            graveC = true;
            starC = false;
            batC = false;
        }

        private void star_MouseDown(object sender, MouseButtonEventArgs e)
        {
            graveC = false;
            starC = true;
            batC = false;
        }

        private void bat_MouseDown(object sender, MouseButtonEventArgs e)
        {
            graveC = false;
            starC = false;
            batC = true;
        }

        private void endChangesColor_Click(object sender, RoutedEventArgs e)
        {
            int selectedItem = myColor.SelectedIndex;
            switch (selectedItem)
            {
                case 0:
                    if (graveC == true)
                    {
                        grave.Fill = new SolidColorBrush(Colors.DarkRed);
                    }
                    else if (starC == true)
                    {
                        star.Fill = new SolidColorBrush(Colors.DarkRed);
                    }
                    else if (batC == true)
                    {
                        bat.Fill = new SolidColorBrush(Colors.DarkRed);
                    }
                    break;
                    case 1:
                    if (graveC == true)
                    {
                        grave.Fill = new SolidColorBrush(Colors.Gray);
                    }
                    else if (starC == true)
                    {
                        star.Fill = new SolidColorBrush(Colors.Gray);
                    }
                    else if (batC == true)
                    {
                        star.Fill = new SolidColorBrush(Colors.Gray);
                    }
                    break;
                case 2:
                    if (graveC == true)
                    {
                        Random random = new Random();

                        grave.Fill = new SolidColorBrush(Color.FromRgb((byte)random.Next(255), (byte)random.Next(255), (byte)random.Next(255)));
                    }
                    else if (starC == true)
                    {
                        Random random = new Random();

                        star.Fill = new SolidColorBrush(Color.FromRgb((byte)random.Next(255), (byte)random.Next(255), (byte)random.Next(255)));
                    }
                    else if (batC == true)
                    {
                        Random random = new Random();

                        bat.Fill = new SolidColorBrush(Color.FromRgb((byte)random.Next(255), (byte)random.Next(255), (byte)random.Next(255)));
                    }
                    break;
                case 3:
                    if (graveC == true)
                    {
                        grave.Fill = new SolidColorBrush(Colors.Black);
                    }
                    else if (starC == true)
                    {
                        star.Fill = new SolidColorBrush(Colors.Black);
                    }
                    else if (batC == true)
                    {
                        bat.Fill = new SolidColorBrush(Colors.Black);
                    }
                    break;
                default:
                    break;
            }
            endChangesColor.Visibility = Visibility.Hidden;
            myColor.Visibility = Visibility.Hidden;

        }

        private void MenuItem_Color_Click(object sender, RoutedEventArgs e)
        {
            endChangesColor.Visibility = Visibility.Visible;
            myColor.Visibility = Visibility.Visible;
        }

    }
}
