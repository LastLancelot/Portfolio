import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiHeader,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { type } from 'os';
import { Public } from './public.declaration';

@ApiTags('Posts')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login as user' })
  @ApiCreatedResponse({ description: 'Logging successfilly complite' })
  @ApiBody({ type: User })
  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  singIn(@Body() singInDto: Record<string, any>) {
    return this.authService.singIn(singInDto.username, singInDto.password);
  }

  @ApiOperation({ summary: 'Get profile' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('profile/')
  getProfile(@Request() req) {
    return req.user;
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({ description: 'User has been successfully created' })
  @ApiBody({ type: User })
  @Public()
  @Post('register')
  @HttpCode(204)
  async register(@Body() createUserDto: Omit<User, 'id'>) {
    return await this.authService.singUp(createUserDto);
  }
}
