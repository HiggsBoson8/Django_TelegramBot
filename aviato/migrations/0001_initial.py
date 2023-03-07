# Generated by Django 4.1.7 on 2023-03-07 17:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.CharField(max_length=1000, verbose_name='Товар')),
                ('count', models.IntegerField(verbose_name='Количество')),
                ('opt_price', models.PositiveIntegerField(verbose_name='Оптовая цена')),
                ('availability', models.BooleanField(default=True, verbose_name='Наличие')),
                ('photo', models.CharField(blank=True, max_length=3000, null=True, verbose_name='Фото')),
                ('product_percent', models.FloatField(blank=True, null=True, verbose_name='2.5% От Суммы Товара')),
                ('product_suum', models.PositiveIntegerField(blank=True, null=True, verbose_name='Сумма товара')),
                ('fake_count', models.PositiveIntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Товар',
                'verbose_name_plural': 'Товары',
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=50, verbose_name='Айди пользователя')),
                ('first_name', models.CharField(blank=True, max_length=100, null=True, verbose_name='Имя')),
                ('username', models.CharField(blank=True, max_length=50, null=True, verbose_name='Имя пользователя')),
                ('role', models.CharField(default='', max_length=200, verbose_name='Роль пользователя')),
            ],
            options={
                'verbose_name': 'Аккаунт',
                'verbose_name_plural': 'Аккаунты',
            },
        ),
        migrations.CreateModel(
            name='RoleCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=200, verbose_name='Код')),
                ('role', models.CharField(choices=[('Пользователь', 'Пользователь'), ('Логист', 'Логист'), ('Снабженец', 'Снабженец'), ('Оператор', 'Оператор'), ('Водитель', 'Водитель'), ('Упаковщик', 'Упаковщик'), ('Менеджер', 'Менеджер'), ('Админ', 'Админ')], default='Пользователь', max_length=200, verbose_name='Роль которая выдается после активатции кода')),
                ('active_user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='aviato.profile', verbose_name='Пользоватлеь который активировал код')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='create_user', to='aviato.profile', verbose_name='Пользователь который создал код')),
            ],
            options={
                'verbose_name': 'Код',
                'verbose_name_plural': 'Коды',
            },
        ),
        migrations.CreateModel(
            name='Applications',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.CharField(max_length=5000, verbose_name='Примечание')),
                ('address', models.CharField(max_length=5000, verbose_name='Адрес')),
                ('product', models.CharField(blank=True, max_length=5000, null=True, verbose_name='Товар')),
                ('price', models.CharField(max_length=100000, verbose_name='Цена')),
                ('phone', models.CharField(max_length=100, verbose_name='Номер')),
                ('checks_document', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Чек')),
                ('direction', models.CharField(blank=True, max_length=400, null=True, verbose_name='Направление')),
                ('delivery_information', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Информация о доставке')),
                ('canceled_reason', models.CharField(blank=True, max_length=3000, null=True, verbose_name='Причина отмены')),
                ('bool_status', models.BooleanField(blank=True, null=True, verbose_name='Подт / Отм')),
                ('create_time', models.DateField(auto_now_add=True, verbose_name='Время создания')),
                ('status', models.CharField(blank=True, choices=[('Ожидает упаковки', 'Ожидает упаковки'), ('Отменен', 'Отменен'), ('Ожидает отправки', 'Ожидает отправки'), ('Передан логисту', 'Передан логисту'), ('Упакован', 'Упакован'), ('Передан диспетчеру', 'Передан диспетчеру'), ('Доставлен', 'Доставлен'), ('Фабричный брак', 'Фабричный брак'), ('Дорожный брак', 'Дорожный брак'), ('Ожидание подтверждения', 'Ожидание подтверждения'), ('В дороге', 'В дороге')], default='Ожидание подтверждения', max_length=200, null=True, verbose_name='Статус')),
                ('location', models.CharField(blank=True, max_length=3000, null=True, verbose_name='Локация')),
                ('location_time', models.CharField(blank=True, max_length=3000, null=True, verbose_name='Время локации')),
                ('time_update_location', models.DateTimeField(auto_now=True, verbose_name='Время изменения локации')),
                ('bool_count', models.BooleanField(blank=True, default=True, null=True, verbose_name='Хватает ли количество')),
                ('driver', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='drive_user', to='aviato.profile', verbose_name='Водитель')),
                ('products', models.ManyToManyField(to='aviato.products', verbose_name='Привязанный товар')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='aviato.profile', verbose_name='Добавил')),
            ],
            options={
                'verbose_name': 'Заявка',
                'verbose_name_plural': 'Заявки',
            },
        ),
    ]
