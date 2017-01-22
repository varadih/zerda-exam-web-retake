DROP TABLE IF EXISTS `cases`;

CREATE TABLE `cases` (
  `case_number` int(5) NOT NULL AUTO_INCREMENT,
  `case_type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`case_number`)
);
