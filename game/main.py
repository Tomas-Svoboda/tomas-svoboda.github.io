'''
The player controls the robot's movement using the arrow keys (up, down, left, and right).
Coins are randomly placed on the screen, and the robot gains points by collecting them.
Simultaneously, the score decreases by 1 point every second, adding a time pressure for
the player. A door appears randomly next to the left or right border, but the robot must
collect all coins before being able to go through the door to the next level. The score
increases by 300 points with each completion of every level. Monsters move around
the screen at different speeds, bouncing off window borders, and the player loses the game
if the robot collides with a monster. In that case, the player can choose to start a new
game or quit the game app. The ranking of up to 7 best results is visible after every game.
'''

import pygame
import random
import math
import sys

class RobotGame:
    def __init__(self):
        pygame.init()

        self.screen_width, self.screen_height = 640, 480
        self.screen = pygame.display.set_mode((self.screen_width, self.screen_height))
        pygame.display.set_caption("Robot vs Monsters Game")

        self.robot_image = pygame.image.load("robot.png")
        self.coin_image = pygame.image.load("coin.png")
        self.door_image = pygame.image.load("door.png")
        self.monster_image = pygame.image.load("monster.png")

        self.score = 0
        self.level = 1
        self.coins = []
        self.monsters = []
        self.ranking = []

        self.font = pygame.font.Font(None, 36)

        self.robot_x, self.robot_y = self.screen_width // 2 - self.robot_image.get_width() // 2, self.screen_height // 2 - self.robot_image.get_height() // 2
        self.robot_speed = 3

        self.clock = pygame.time.Clock()
        self.running = True
        self.game_over_displayed = False

        self.spawn_coins()
        self.door_x, self.door_y = self.spawn_door()
        self.spawn_monsters(self.door_x, self.door_y)

        self.main_game_loop()

    def spawn_coins(self):
        self.coins.clear()
        for _ in range(10):
            coin_x = random.randint(0, self.screen_width - self.coin_image.get_width())
            coin_y = random.randint(0, self.screen_height - self.coin_image.get_height())
            self.coins.append((coin_x, coin_y))

    def spawn_monsters(self, door_x, door_y):
        self.monsters.clear()
        for _ in range(self.level):
            if door_x == 0:
                monster_x = self.screen_width - self.monster_image.get_width()
            else:
                monster_x = 0
            monster_y = random.randint(0, self.screen_height - self.monster_image.get_height())
            monster_speed = random.uniform(1, 3)
            monster_angle = random.uniform(0, 2 * math.pi)
            self.monsters.append((monster_x, monster_y, monster_speed, monster_angle))

    def spawn_door(self):
        door_x = 0 if random.choice([True, False]) else self.screen_width - self.door_image.get_width()
        door_y = random.randint(0, self.screen_height - self.door_image.get_height())
        return door_x, door_y

    def draw_objects(self):
        self.screen.fill((0, 0, 0))
        for monster_x, monster_y, _, _ in self.monsters:
            self.screen.blit(self.monster_image, (monster_x, monster_y))
        for coin_x, coin_y in self.coins:
            self.screen.blit(self.coin_image, (coin_x, coin_y))
        self.screen.blit(self.door_image, (self.door_x, self.door_y))
        self.screen.blit(self.robot_image, (self.robot_x, self.robot_y))

        level_text = self.font.render(f"Level: {self.level}", True, (255, 255, 255))
        score_text = self.font.render(f"Score: {self.score}", True, (255, 255, 255))
        self.screen.blit(level_text, (10, 10))
        self.screen.blit(score_text, (10, 40))

        pygame.display.flip()

    def main_game_loop(self):
        self.elapsed_time = 0
        while self.running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    self.running = False
                elif event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_q and not self.game_over_displayed:
                        self.running = False

            keys = pygame.key.get_pressed()

            if keys[pygame.K_RIGHT]:
                self.robot_x += self.robot_speed
            if keys[pygame.K_LEFT]:
                self.robot_x -= self.robot_speed
            if keys[pygame.K_DOWN]:
                self.robot_y += self.robot_speed
            if keys[pygame.K_UP]:
                self.robot_y -= self.robot_speed

            self.robot_x = max(0, min(self.screen_width - self.robot_image.get_width(), self.robot_x))
            self.robot_y = max(0, min(self.screen_height - self.robot_image.get_height(), self.robot_y))

            self.elapsed_time += self.clock.get_rawtime() / 100.0

            for i in range(len(self.monsters)):
                monster_x, monster_y, monster_speed, monster_angle = self.monsters[i]
                monster_x += monster_speed * math.cos(monster_angle)
                monster_y += monster_speed * math.sin(monster_angle)

                if monster_x < 0 or monster_x > self.screen_width - self.monster_image.get_width():
                    monster_angle = math.pi - monster_angle
                    if self.robot_x < self.screen_width / 2:
                        monster_x = self.screen_width - self.monster_image.get_width()
                    else:
                        monster_x = 0

                if monster_y < 0 or monster_y > self.screen_height - self.monster_image.get_height():
                    monster_angle = -monster_angle

                self.monsters[i] = (monster_x, monster_y, monster_speed, monster_angle)

            for monster_x, monster_y, _, _ in self.monsters:
                monster_rect = pygame.Rect(monster_x, monster_y, self.monster_image.get_width(), self.monster_image.get_height())

                robot_rect = pygame.Rect(self.robot_x + 4, self.robot_y + 4, self.robot_image.get_width() - 10, self.robot_image.get_height() - 10)

                if monster_rect.colliderect(robot_rect) and not self.game_over_displayed:
                    self.game_over_displayed = True
                    print(f"Game Over! Your final score: {self.score}")

                    game_over_font = pygame.font.Font(None, 60)
                    game_over_text = game_over_font.render("Game Over", True, (255, 0, 0))
                    instruction_font = pygame.font.Font(None, 45)
                    instruction_text = instruction_font.render("Press 'n' to play new game or 'q' to quit", True, (255, 0, 255))
                    self.screen.blit(game_over_text, (self.screen_width // 2 - 115, self.screen_height // 2 - 200))
                    self.screen.blit(instruction_text, (37, self.screen_height // 2 - 130))

                    ranking_font = pygame.font.Font(None, 36)
                    ranking_text = ranking_font.render("Ranking:", True, (255, 255, 255))

                    self.ranking.append(self.score)
                    self.ranking.sort(reverse=True)

                    for i in range(min(len(self.ranking), 7)):
                        rank_text = ranking_font.render(f"#{i + 1}: {self.ranking[i]}", True, (0, 255, 0))
                        self.screen.blit(rank_text, (self.screen_width // 2 - 42, self.screen_height // 2 - 65 + i * 40))

                    pygame.display.flip()

                    waiting_for_input = True
                    while waiting_for_input:
                        for event in pygame.event.get():
                            if event.type == pygame.KEYDOWN:
                                if event.key == pygame.K_n:
                                    waiting_for_input = False
                                    self.game_over_displayed = False
                                    self.score = 0
                                    self.level = 1
                                    self.coins = []
                                    self.monsters = []
                                    self.spawn_coins()
                                    self.spawn_monsters(self.door_x, self.door_y)
                                    self.door_x, self.door_y = self.spawn_door()
                                    self.robot_x, self.robot_y = self.screen_width // 2 - self.robot_image.get_width() // 2, self.screen_height // 2 - self.robot_image.get_height() // 2
                                    self.game_over_displayed = False
                                elif event.key == pygame.K_q:
                                    waiting_for_input = False
                                    self.running = False
                            elif event.type == pygame.QUIT:
                                waiting_for_input = False
                                self.running = False

                    self.screen.fill((0, 0, 0))
                    self.draw_objects()

            if self.elapsed_time >= 1:
                self.score -= 1
                self.elapsed_time = 0

            for coin in self.coins[:]:
                coin_x, coin_y = coin
                coin_rect = pygame.Rect(coin_x, coin_y, self.coin_image.get_width(), self.coin_image.get_height())
                if coin_rect.colliderect((self.robot_x, self.robot_y, self.robot_image.get_width(), self.robot_image.get_height())) and not self.game_over_displayed:
                    self.coins.remove(coin)
                    self.score += 20

            door_rect = pygame.Rect(self.door_x, self.door_y, self.door_image.get_width(), self.door_image.get_height())
            if door_rect.colliderect((self.robot_x, self.robot_y, self.robot_image.get_width(), self.robot_image.get_height())) and len(self.coins) == 0 and not self.game_over_displayed:
                self.score += 300
                print(f"Congratulations! You completed Level {self.level}")
                self.level += 1
                self.spawn_coins()
                self.spawn_monsters(self.door_x, self.door_y)
                self.door_x, self.door_y = self.spawn_door()

            self.draw_objects()
            self.clock.tick(60)
        pygame.quit()
        sys.exit()

if __name__ == "__main__":
    RobotGame()
