# 1.07

    - Changed theme color from Indigo to Blue
    - Changed UI on the tables. Added a card on it
    - Replaced fab buttons with icon-buttons
    - Modified the search query design
    - Item Module 
        - Fixed Supplier field missing
        - Item name length is now 50
        - Item table 
            - Added category column
            - Removed quantity and units
            - Modified stocks column with units
            - Added a view details button with edit button on it.

    - Supplier Module 
        - Added a company field and column
        - Secondary number is now optional

    - Dashboard Module
        - Fixed dashboard page not showing empty stocks

    - Stock Module
        - Added brand and category column
        - Modified quantity column with units

# 1.06
    
    - Dashboard chart on-sync.
    - Disabled editing of supplier name. Can only delete contact numbers.
    - Added input length on input forms.
    - Added timeout on each states before loading items for smoother transitions.

# 1.05.1

    - Added tooltip on every action
    - Notification for low stocks

# 1.05

    - Tomcat is already running on app's startup
    - Fixed stock module
    - Fixed database relationship between items and suppliers
    - Fixed item module
    - Added a loading bar interceptor (3rd party lib)
    - Added form validations 
        - Supplier primary no & secondary no