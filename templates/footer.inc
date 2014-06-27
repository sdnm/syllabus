    <footer id="footer" class="<?php print $classes; ?>">
      <div class="footer-wrapper">
        <img src="<?php print '/' . drupal_get_path('theme', 'syllabus') . '/' . 'images/tls-logo@2x.png'; ?>" alt="<?php print t('TLS Logo'); ?>" height="180" width="185">
        <div class="info">
        <span><?php print t('<strong>Technical assistance</strong> !tel', array('!tel' => l('613-562-5800 ext. 6555', 'tel:613-562-5800', array('external'=> TRUE)))); ?> </span>
        <span><?php print t('<strong>Contact</strong> !mailto', array('!mailto' => l('uoSyllabus@uOttawa.ca', 'mailto:uosyllabus@uottawa.ca', array('external'=> TRUE)))); ?> </span>
        </div>
        <p class="milli colophon"><?php print t('Copyright &copy; ') . date(Y) . t(' !uottawa', array('!uottawa' => l('University of Ottawa', 'http://uottawa.ca', array('external' => TRUE)))); ?></p>
      </div>
    </footer>
  </div> <!-- sliding canvas end -->
</div> <!-- page end -->

<?php print render($page['bottom']); ?>
