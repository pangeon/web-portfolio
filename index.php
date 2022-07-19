<!DOCTYPE html>
<html class="no-scroll">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cecherz | strona prywatna</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
    <!-- Google fonts - Roboto + Roboto Slab-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700%7CRoboto:400,700,300">
    <!-- owl carousel-->
    <link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.css">
    <link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.css">
    <!-- animate.css-->
    <link rel="stylesheet" href="vendor/animate.css/animate.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="css/custom.css">
    <!-- Leaflet CSS - For the map-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.css">
    <!-- Favicon-->
    <link rel="shortcut icon" href="img/favicon.png">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
  </head>

  <body>
    <!-- Main nav -->
    <?php
      $content = file_get_contents("fragments/main_nav.html");
      echo $content;
    ?>
    <!-- Main nav -->

    <!-- Intro image-->
    <?php
      $content = file_get_contents("fragments/intro_image.html");
      echo $content;
    ?>
    <!-- Intro image-->

    <!-- About-->
    <?php
      $content = file_get_contents("fragments/about.html");
      echo $content;
    ?>
    <!-- About -->

    <!-- Service -->
    <?php
      $content = file_get_contents("fragments/service.html");
      echo $content;
    ?>
    <!-- Service -->

    <!-- Projects -->
    <?php
      $content = file_get_contents("fragments/projects.html");
      echo $content;
    ?>
    <!-- Projects -->

    <!-- Customers-->
    <?php
      $content = file_get_contents("fragments/customers.html");
      echo $content;
    ?>
    <!-- Customers-->

    <!-- Contact-->
    <?php
      $content = file_get_contents("fragments/contact.html");
      echo $content;
    ?>
    <!-- Contact-->

    <!-- Map-->
    <div id="map"></div>
    <!-- Map-->
    
    <!-- Top footer -->
    <?php
      $content = file_get_contents("fragments/top_footer.html");
      echo $content;
    ?>
    <!-- Top footer -->

    <!-- Buttom footer -->
    <?php
      $content = file_get_contents("fragments/bottom_footer.html");
      echo $content;
    ?>
    <!-- Buttom footer -->

    <!-- JavaScript files -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/jquery.cookie/jquery.cookie.js"> </script>
    <script src="vendor/owl.carousel/owl.carousel.min.js"></script>
    <script src="vendor/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="vendor/jquery.counterup/jquery.counterup.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.js"> </script>
    <script src="js/front.js"></script>
    <!-- JavaScript files -->

  </body>
</html>