@foo
Feature: awesome calc function
	Scenario: plus
		Then <a> + <b> = <result>
		Examples:
			| a | b | result |
			| 1 | 2 | 3      |
			| 3 | 4 | 7      |
			| 5 | 6 | 11     |

	Scenario: minus
		Then <a> - <b> = <result>
		Examples:
			| a  | b | result |
			| 2  | 1 | 1      |
			| 9  | 4 | 5      |
			| 15 | 6 | 9      |

	Scenario: multiply
		Then <a> * <b> = <result>
		Examples:
			| a | b | result |
			| 2 | 3 | 6      |
			| 4 | 5 | 20     |
			| 6 | 7 | 42     |

	Scenario: divide
		Then <a> / <b> = <result>
		Examples:
			| a  | b | result |
			| 8  | 2 | 4      |
			| 9  | 3 | 3      |
			| 27 | 3 | 9      |