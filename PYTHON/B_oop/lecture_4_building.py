class Building:
    num_buildings=0
    def __init__(self, floors, rooms, color):
        self.num_floors = floors
        self.num_rooms = rooms
        self.color = color
        Building.num_buildings +=1

    def repaint(self, new_color):
        self.color = new_color
        return self

    def expand(self,num_new_rooms, num_new_floors = 0):
        self.num_floors += num_new_floors
        self.num_rooms += num_new_rooms
        print("expanding this generic building")
        return self

    @classmethod
    def show_number_buildings(cls):
        return cls.num_buildings

class House(Building):
    def __init__(self,floors,rooms,color,num_of_TVs):
        super().__init__(floors,rooms,color)
        self.num_of_TVs = num_of_TVs
        self.hired_contractor = None

    def expand(self,num_new_rooms):
        self.num_rooms += num_new_rooms
        print("expanding this house")
        return self
    
    def hire_contractor(self,new_contractor):
        self.hire_contractor = new_contractor
        return self
    
    def build_new_room(self):
        if self.hired_contractor != None:
            self.num_rooms +=1
            print("new room added")
        else:
            print("no room added - no contractor available")
        return self

# class Contractor:
#     def __init__(self, name):


boeing_plant = Building(2,5,"gray")

my_house = House(1,6,"yellow",3)

boeing_plant.expand(3,2)
my_house.expand(2)

